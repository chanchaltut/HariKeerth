import React, { useState } from 'react';
import {
  PiPhoneCallDuotone, PiEnvelopeSimpleDuotone, PiMapPinDuotone, PiWhatsappLogoDuotone, PiClockDuotone,
  PiPaperPlaneTilt, PiWhatsappLogo, PiLockKey, PiCaretDown, PiIdentificationBadgeDuotone, PiArrowUpRight,
} from 'react-icons/pi';
import Swal from 'sweetalert2';
import { PageHero, Breadcrumb, Seo } from '../components/ui';
import { BRAND, formatPhone, waLink, breadcrumbLd } from '../data/site';
import { SERVICES } from '../data/services';

const escapeHtml = (str) =>
  String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const swalBase = {
  showCancelButton: true,
  confirmButtonColor: '#1FAF5A',
  cancelButtonColor: '#012E59',
  reverseButtons: true,
  customClass: {
    popup: 'rounded-3xl font-sans',
    confirmButton: 'rounded-full font-semibold px-6 py-3',
    cancelButton: 'rounded-full font-semibold px-6 py-3',
  },
};

const EMPTY = { name: '', email: '', phone: '', service: '', message: '', company: '' };

const Contact = () => {
  const [formData, setFormData] = useState(EMPTY);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const waUrl = waLink(
      `Hi Harikeerth Infratax! I submitted an enquiry on your website:\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email || '—'}\n*Service:* ${formData.service || 'General Enquiry'}\n*Message:* ${formData.message}`
    );

    try {
      // Delivered straight to the firm's WhatsApp by /api/enquiry
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error(`Enquiry delivery failed with status ${res.status}`);
    } catch (err) {
      console.error('Contact form delivery failed:', err);
      setIsSubmitting(false);
      Swal.fire({
        ...swalBase,
        title: 'One more step',
        text: 'Tap below to send your enquiry to our team on WhatsApp — your details are already filled in.',
        icon: 'info',
        iconColor: '#C9972B',
        confirmButtonText: 'Send on WhatsApp',
        cancelButtonText: 'Close',
      }).then((r) => r.isConfirmed && window.open(waUrl, '_blank'));
      return;
    }

    setIsSubmitting(false);
    Swal.fire({
      ...swalBase,
      title: 'Enquiry received',
      html: `<p style="color:#4A586D;font-size:15px;margin-bottom:12px">Thank you, <strong>${escapeHtml(formData.name)}</strong>! Your enquiry about <strong>${escapeHtml(formData.service || 'our services')}</strong> has reached the Harikeerth Infratax team. We will get back to you shortly.</p><p style="color:#7D8799;font-size:13px">For an instant response, continue on WhatsApp.</p>`,
      icon: 'success',
      iconColor: '#C9972B',
      confirmButtonText: 'Continue on WhatsApp',
      cancelButtonText: 'Done',
    }).then((r) => r.isConfirmed && window.open(waUrl, '_blank'));
    setFormData(EMPTY);
  };

  const contactInfo = [
    { icon: PiPhoneCallDuotone, title: 'Call Us', lines: BRAND.phones.map((p) => [formatPhone(p), `tel:${p}`]) },
    { icon: PiWhatsappLogoDuotone, title: 'WhatsApp', lines: [[formatPhone(BRAND.phone), waLink('Hi Harikeerth Infratax! I would like a consultation.')]] },
    { icon: PiEnvelopeSimpleDuotone, title: 'Email', lines: [[BRAND.email, `mailto:${BRAND.email}`]] },
    { icon: PiClockDuotone, title: 'Office Hours', lines: [[BRAND.timings]] },
    { icon: PiIdentificationBadgeDuotone, title: 'Registered LLP', lines: [[`${BRAND.legalName} · LLPIN ${BRAND.llpin}`]] },
  ];

  return (
    <>
      <Seo
        path="/contact"
        title="Contact Harikeerth Infratax | Madurai Office, Phone & WhatsApp"
        description={`Visit Harikeerth Infratax LLP at ${BRAND.address}. Call ${BRAND.phones.map(formatPhone).join(', ')} or WhatsApp for a free consultation.`}
        keywords="Contact Harikeerth Infratax, Harikeerth Madurai address, Harikeerth phone number, tax consultant Iyerbungalow, New Natham Road consultant Madurai"
        jsonLd={[breadcrumbLd([['Home', '/'], ['Contact', '/contact']])]}
      />

      <PageHero
        top={<Breadcrumb items={[['Home', '/'], ['Contact', null]]} />}
        eyebrow="Free First Consultation"
        title={<>Let’s <span className="accent-serif-light">talk</span></>}
        description="Visit our Madurai office, call, WhatsApp or send a message — a partner will personally look into your requirement."
      />

      <section className="bg-surface px-4 pb-24 sm:px-6">
        <div className="relative mx-auto -mt-10 grid max-w-6xl gap-6 lg:grid-cols-12">
          {/* Contact info */}
          <div className="space-y-4 lg:col-span-5">
            <a href={BRAND.mapsUrl} target="_blank" rel="noopener noreferrer" className="surface-dark group block rounded-4xl p-7">
              <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-gold-500/30 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <span className="icon-tile-gold h-11 w-11 text-2xl"><PiMapPinDuotone /></span>
                <h3 className="mt-5 text-xl font-semibold text-white">Our Office</h3>
                <address className="mt-2 text-[15px] not-italic leading-relaxed text-brand-100/80">
                  {BRAND.addressLines.map((l) => <span key={l} className="block">{l}</span>)}
                  <span className="block">Tamil Nadu, India</span>
                </address>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-gold-300 group-hover:text-gold-200">
                  Get directions <PiArrowUpRight />
                </span>
              </div>
            </a>

            <div className="card divide-y divide-line">
              {contactInfo.map(({ icon: Icon, title, lines }) => (
                <div key={title} className="flex items-start gap-4 p-5">
                  <span className="icon-tile-soft h-11 w-11 text-xl"><Icon /></span>
                  <div className="min-w-0">
                    <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-ink-mute">{title}</p>
                    {lines.map(([text, href]) => (href ? (
                      <a key={text} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="mt-0.5 block break-words text-[15px] font-semibold text-ink transition-colors hover:text-brand-600">
                        {text}
                      </a>
                    ) : (
                      <p key={text} className="mt-0.5 break-words text-[15px] font-semibold text-ink">{text}</p>
                    )))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="card p-7 sm:p-10 lg:col-span-7">
            <div className="eyebrow">Send a Message</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Tell us about your <span className="accent-serif">requirement</span>
            </h2>
            <p className="mt-2 text-[15px] text-ink-soft">Fill in your details and we will reach out promptly with next steps.</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Honeypot — hidden from people, filled in by spam bots */}
              <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="c-company">Company</label>
                <input id="c-company" type="text" name="company" value={formData.company} onChange={handleChange} tabIndex={-1} autoComplete="off" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="field-label">Full Name *</label>
                  <input id="c-name" type="text" name="name" value={formData.name} onChange={handleChange} required className="field" placeholder="Your name" autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="c-phone" className="field-label">Mobile Number *</label>
                  <input id="c-phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} required pattern="[0-9]{10}" title="Please enter a valid 10-digit mobile number" className="field" placeholder="10-digit mobile number" autoComplete="tel-national" />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-email" className="field-label">Email Address</label>
                  <input id="c-email" type="email" name="email" value={formData.email} onChange={handleChange} className="field" placeholder="you@example.com" autoComplete="email" />
                </div>
                <div>
                  <label htmlFor="c-service" className="field-label">Service Required</label>
                  <div className="relative">
                    <select id="c-service" name="service" value={formData.service} onChange={handleChange} className="field appearance-none pr-10">
                      <option value="">Select a service</option>
                      {SERVICES.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
                      <option value="Other / Not sure">Other / Not sure</option>
                    </select>
                    <PiCaretDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-mute" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="c-message" className="field-label">Message *</label>
                <textarea id="c-message" name="message" value={formData.message} onChange={handleChange} required rows="5" className="field resize-none" placeholder="Tell us about your business, project or requirement…" />
              </div>

              <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row">
                <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-shine btn-lg w-full disabled:opacity-70 sm:w-auto">
                  {isSubmitting ? 'Sending…' : <><PiPaperPlaneTilt className="text-lg text-gold-300" /> Send Enquiry</>}
                </button>
                <span className="flex items-center gap-1.5 text-[13px] text-ink-mute">
                  <PiLockKey className="text-base" />
                  Your information is kept strictly confidential.
                </span>
              </div>
            </form>

            <a href={waLink('Hi Harikeerth Infratax! I would like a consultation.')} target="_blank" rel="noopener noreferrer" className="mt-8 flex items-center justify-between gap-4 rounded-2xl border border-line bg-ivory p-4 transition-colors hover:border-whatsapp">
              <span className="text-[14px] text-ink-soft">Prefer chat? <strong className="font-semibold text-ink">Message us on WhatsApp</strong></span>
              <span className="btn btn-whatsapp btn-sm"><PiWhatsappLogo className="text-base" /> Chat</span>
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="mx-auto mt-6 max-w-6xl overflow-hidden rounded-4xl border border-line bg-white shadow-soft">
          <iframe
            title={`Map — ${BRAND.legalName}, Madurai`}
            src={BRAND.mapsEmbed}
            className="h-[360px] w-full sm:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
