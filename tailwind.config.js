/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xs': '320px',
        '2xs': '375px',
        xs: '475px',
      },
      colors: {
        // Harikeerth navy — logo #012E59
        brand: {
          50: '#EEF3F9',
          100: '#D7E3F1',
          200: '#AFC6E2',
          300: '#7EA1CC',
          400: '#4C79B2',
          500: '#235A98',
          600: '#0E447F',
          700: '#012E59', // LOGO NAVY
          800: '#01254A',
          900: '#011B37',
          950: '#010F21',
        },
        // Harikeerth gold — logo gradient #BB8523 → #DCB72D
        gold: {
          50: '#FCF8EC',
          100: '#F7EDCE',
          200: '#EFDA9C',
          300: '#E6C565',
          400: '#DCB23F',
          500: '#C9972B', // LOGO GOLD
          600: '#A97A1F',
          700: '#865E1A',
          800: '#654717',
          900: '#4A3412',
        },
        ink: {
          DEFAULT: '#0A1A30',
          soft: '#4A586D',
          mute: '#7D8799',
          950: '#010A17',
          900: '#03132A',
          800: '#0A2142',
        },
        ivory: '#FBF9F4',
        surface: '#F6F4EE',
        line: '#E7E1D4',
        whatsapp: { DEFAULT: '#1FAF5A', dark: '#168A46' },
      },
      fontFamily: {
        sans: ['Outfit', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fadeIn 1.2s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 40s linear infinite',
        'spin-slower': 'spin 70s linear infinite reverse',
        'ken-burns': 'kenBurns 24s ease-out both',
        shimmer: 'shimmer 6s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1.12)' },
          '100%': { transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgba(10,26,48,0.04), 0 8px 24px -8px rgba(10,26,48,0.08)',
        lift: '0 2px 4px rgba(10,26,48,0.04), 0 24px 48px -16px rgba(1,46,89,0.22)',
        float: '0 30px 80px -20px rgba(1,15,33,0.35)',
        gold: '0 10px 34px -10px rgba(201,151,43,0.65)',
        'inset-hi': 'inset 0 1px 0 rgba(255,255,255,0.18)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
