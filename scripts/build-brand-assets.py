#!/usr/bin/env python3
"""
Builds every web-ready brand asset from the masters in brand-assets/.

  python3 scripts/build-brand-assets.py          # logos, favicons, photos
  python3 scripts/build-brand-assets.py --og     # also re-render the OG banner (needs google-chrome)

Inputs   brand-assets/logo/harikeerth-logo-master-4k.png   (rendered from harikeerth-logo.svg)
         brand-assets/photography/*.jpg
         brand-assets/og/og-image.html
Outputs  src/assets/brand/*.webp      logos used by the React app (hashed by Vite)
         src/assets/images/*.webp     photography used by the React app
         public/                      favicons, apple-touch-icon, manifest icons, logo.png, og-image.jpg
"""
import subprocess
import sys
from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
BRAND = ROOT / 'brand-assets'
OUT_BRAND = ROOT / 'src' / 'assets' / 'brand'
OUT_IMG = ROOT / 'src' / 'assets' / 'images'
PUBLIC = ROOT / 'public'

NAVY_TOP = (2, 58, 112)
NAVY_BOTTOM = (1, 26, 54)
GOLD = (214, 172, 58)


def load_master():
    im = Image.open(BRAND / 'logo' / 'harikeerth-logo-master-4k.png').convert('RGBA')
    return im.crop(im.getbbox())


def split_master(im):
    """Separates the HK mark from the HARIKEERTH / INFRATAX wordmark using the empty rows between them."""
    alpha = im.split()[3]
    w, h = im.size
    filled = [any(alpha.getpixel((x, y)) > 20 for x in range(0, w, 3)) for y in range(h)]
    gap_start = next(y for y in range(h) if not filled[y])
    gap_end = next(y for y in range(gap_start, h) if filled[y])
    mark = im.crop((0, 0, w, gap_start))
    word = im.crop((0, gap_end, w, h))
    return mark.crop(mark.getbbox()), word.crop(word.getbbox())


def to_light(im):
    """Navy -> white (for dark backgrounds); gold stays gold."""
    r, g, b, a = im.split()
    navy_mask = ImageChops.subtract(b, r).point(lambda v: 255 if v > 6 else 0)
    white = Image.new('RGBA', im.size, (255, 255, 255, 255))
    out = Image.composite(white, im, navy_mask)
    out.putalpha(a)
    return out


def fit_height(im, height):
    return im.resize((round(im.width * height / im.height), height), Image.LANCZOS)


def horizontal_lockup(mark, word):
    """Mark on the left, wordmark vertically centred on the right."""
    mh = mark.height
    word = fit_height(word, round(mh * 0.6))
    gap = round(mh * 0.16)
    canvas = Image.new('RGBA', (mark.width + gap + word.width, mh), (0, 0, 0, 0))
    canvas.alpha_composite(mark, (0, 0))
    canvas.alpha_composite(word, (mark.width + gap, (mh - word.height) // 2 + round(mh * 0.03)))
    return canvas


def save_webp(im, path, height=None, width=None, quality=88):
    if height:
        im = fit_height(im, height)
    if width:
        im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    path.parent.mkdir(parents=True, exist_ok=True)
    im.save(path, 'WEBP', quality=quality, method=6)
    print(f'  {path.relative_to(ROOT)}  {im.size[0]}x{im.size[1]}  {path.stat().st_size // 1024} KB')


def vertical_gradient(size, top, bottom):
    grad = Image.linear_gradient('L').resize(size)
    return Image.composite(Image.new('RGB', size, bottom), Image.new('RGB', size, top), grad)


def app_icon(mark_light, size, *, radius=0.22, scale=0.74, ring=True, full_bleed=False):
    """Navy tile with the light HK mark. Rendered at 1024 px, then downsampled for crisp edges."""
    S = 1024
    bg = vertical_gradient((S, S), NAVY_TOP, NAVY_BOTTOM).convert('RGBA')
    # soft gold glow behind the mark
    glow = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    ImageDraw.Draw(glow).ellipse((S * 0.2, S * 0.18, S * 0.8, S * 0.78), fill=(214, 172, 58, 46))
    bg.alpha_composite(glow.filter(ImageFilter.GaussianBlur(S * 0.09)))

    mark = mark_light.copy()
    target_w = round(S * scale)
    mark = mark.resize((target_w, round(mark.height * target_w / mark.width)), Image.LANCZOS)
    bg.alpha_composite(mark, ((S - mark.width) // 2, (S - mark.height) // 2 + round(S * 0.01)))

    if ring and not full_bleed:
        inset = round(S * 0.035)
        ImageDraw.Draw(bg).rounded_rectangle(
            (inset, inset, S - inset, S - inset), radius=round(S * (radius - 0.025)),
            outline=(214, 172, 58, 150), width=max(4, round(S * 0.008)))

    if not full_bleed:
        mask = Image.new('L', (S, S), 0)
        ImageDraw.Draw(mask).rounded_rectangle((0, 0, S - 1, S - 1), radius=round(S * radius), fill=255)
        bg.putalpha(mask)
    return bg.resize((size, size), Image.LANCZOS)


def build_logos():
    print('Logos')
    master = load_master()
    mark, word = split_master(master)
    mark_light, word_light = to_light(mark), to_light(word)

    lockup = horizontal_lockup(mark, word)
    lockup_light = horizontal_lockup(mark_light, word_light)
    # Sized for ~2.5x their largest on-screen size
    save_webp(lockup, OUT_BRAND / 'logo-horizontal.webp', height=128, quality=86)
    save_webp(lockup_light, OUT_BRAND / 'logo-horizontal-light.webp', height=128, quality=86)
    save_webp(mark, OUT_BRAND / 'logo-mark.webp', height=280, quality=86)
    save_webp(mark_light, OUT_BRAND / 'logo-mark-light.webp', height=200, quality=86)

    # Raster masters for the OG banner and other non-web uses
    lockup_light_png = fit_height(lockup_light, 400)
    lockup_light_png.save(BRAND / 'logo' / 'harikeerth-logo-horizontal-light.png', optimize=True)
    fit_height(lockup, 400).save(BRAND / 'logo' / 'harikeerth-logo-horizontal.png', optimize=True)

    # Schema.org / Google logo: stacked logo on white, 600 px wide
    logo = Image.new('RGBA', (600, 600), (255, 255, 255, 255))
    stacked = master.resize((520, round(master.height * 520 / master.width)), Image.LANCZOS)
    logo.alpha_composite(stacked, ((600 - stacked.width) // 2, (600 - stacked.height) // 2))
    logo.convert('RGB').save(PUBLIC / 'logo.png', optimize=True)
    print('  public/logo.png')
    return mark_light


def build_favicons(mark_light):
    print('Favicons')
    for size in (16, 32, 48):
        # small sizes: bigger mark, no ring — legibility over ornament
        app_icon(mark_light, size, scale=0.86, ring=False).save(PUBLIC / f'favicon-{size}.png', optimize=True)
    for size in (96, 144, 192, 512):
        app_icon(mark_light, size).save(PUBLIC / f'favicon-{size}.png', optimize=True)
    # iOS applies its own corner mask, so the tile is full-bleed
    app_icon(mark_light, 180, full_bleed=True).convert('RGB').save(PUBLIC / 'apple-touch-icon.png', optimize=True)
    # Android maskable: full bleed, mark inside the 80 % safe zone
    app_icon(mark_light, 512, scale=0.58, full_bleed=True).convert('RGB').save(PUBLIC / 'favicon-maskable-512.png', optimize=True)
    ico_src = app_icon(mark_light, 256, scale=0.86, ring=False)
    ico_src.save(PUBLIC / 'favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])
    print('  public/favicon.ico + favicon-{16..512}.png + apple-touch-icon.png + favicon-maskable-512.png')


# (source, output name, [(width, quality), ...])
PHOTOS = [
    ('hero-skyline', 'hero-skyline', [(1920, 60), (1080, 58)]),
    ('about-cranes', 'about-cranes', [(900, 58)]),
    ('why-towers', 'why-towers', [(800, 66)]),
    ('site-workers', 'site-workers', [(900, 64)]),
    ('svc-business', 'svc-business', [(1280, 50), (640, 64)]),
    ('svc-accounting', 'svc-accounting', [(1280, 50), (640, 64)]),
    ('svc-civil', 'svc-civil', [(1280, 50), (640, 64)]),
    ('svc-tender', 'svc-tender', [(1280, 50), (640, 64)]),
    ('svc-trademark', 'svc-trademark', [(1280, 50), (640, 64)]),
    ('svc-bankloan', 'svc-bankloan', [(1280, 50), (640, 64)]),
    ('svc-litigation', 'svc-litigation', [(1280, 50), (640, 64)]),
    ('svc-project', 'svc-project', [(1280, 42), (640, 56)]),
    ('svc-company-sale', 'svc-company-sale', [(1280, 50), (640, 64)]),
    ('svc-unlisted', 'svc-unlisted', [(1280, 50), (640, 64)]),
]


def build_photos():
    print('Photography')
    for src, name, variants in PHOTOS:
        im = Image.open(BRAND / 'photography' / f'{src}.jpg').convert('RGB')
        for i, (width, quality) in enumerate(variants):
            suffix = '' if i == 0 else f'-{width}'
            save_webp(im, OUT_IMG / f'{name}{suffix}.webp', width=min(width, im.width), quality=quality)


def build_og():
    print('OG banner')
    html = BRAND / 'og' / 'og-image.html'
    shot = BRAND / 'og' / 'og-image@2x.png'
    subprocess.run([
        'google-chrome', '--headless=new', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
        '--force-device-scale-factor=2', '--window-size=1200,630', '--virtual-time-budget=8000',
        f'--screenshot={shot}', html.as_uri(),
    ], check=True, capture_output=True)
    im = Image.open(shot).convert('RGB').resize((1200, 630), Image.LANCZOS)
    im.save(PUBLIC / 'og-image.jpg', 'JPEG', quality=86, optimize=True, progressive=True)
    print(f'  public/og-image.jpg  {(PUBLIC / "og-image.jpg").stat().st_size // 1024} KB')


if __name__ == '__main__':
    OUT_BRAND.mkdir(parents=True, exist_ok=True)
    OUT_IMG.mkdir(parents=True, exist_ok=True)
    build_favicons(build_logos())
    build_photos()
    if '--og' in sys.argv:
        build_og()
