import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ── Material Design 3 Color Tokens (from mockup) ──────────────────────
      colors: {
        'primary': '#004ac6',
        'primary-container': '#2563eb',
        'primary-fixed': '#dbe1ff',
        'primary-fixed-dim': '#b4c5ff',
        'on-primary': '#ffffff',
        'on-primary-container': '#eeefff',
        'on-primary-fixed': '#00174b',
        'on-primary-fixed-variant': '#003ea8',
        'inverse-primary': '#b4c5ff',

        'secondary': '#505f76',
        'secondary-container': '#d0e1fb',
        'secondary-fixed': '#d3e4fe',
        'secondary-fixed-dim': '#b7c8e1',
        'on-secondary': '#ffffff',
        'on-secondary-container': '#54647a',
        'on-secondary-fixed': '#0b1c30',
        'on-secondary-fixed-variant': '#38485d',

        'tertiary': '#005a82',
        'tertiary-container': '#0074a6',
        'tertiary-fixed': '#c9e6ff',
        'tertiary-fixed-dim': '#89ceff',
        'on-tertiary': '#ffffff',
        'on-tertiary-container': '#e4f2ff',
        'on-tertiary-fixed': '#001e2f',
        'on-tertiary-fixed-variant': '#004c6e',

        'surface': '#f8f9ff',
        'surface-dim': '#ccdbf4',
        'surface-bright': '#f8f9ff',
        'surface-tint': '#0053db',
        'surface-variant': '#d5e3fd',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#eff4ff',
        'surface-container': '#e6eeff',
        'surface-container-high': '#dde9ff',
        'surface-container-highest': '#d5e3fd',
        'on-surface': '#0d1c2f',
        'on-surface-variant': '#434655',
        'inverse-surface': '#233144',
        'inverse-on-surface': '#ebf1ff',

        'background': '#f8f9ff',
        'on-background': '#0d1c2f',

        'outline': '#737686',
        'outline-variant': '#c3c6d7',

        'error': '#ba1a1a',
        'error-container': '#ffdad6',
        'on-error': '#ffffff',
        'on-error-container': '#93000a',

        'surface-tint-color': '#0053db',
      },

      // ── Custom Spacing ────────────────────────────────────────────────────
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        'base': '4px',
        'gutter': '16px',
        'margin-mobile': '20px',
      },

      // ── Typography ────────────────────────────────────────────────────────
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'serif': ['"Times New Roman"', 'Times', 'serif'],
      },
      fontSize: {
        'h1': ['30px', { lineHeight: '36px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['24px', { lineHeight: '32px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'label-md': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'label-sm': ['12px', { lineHeight: '16px', fontWeight: '600' }],
        'button': ['16px', { lineHeight: '24px', fontWeight: '600' }],
      },

      // ── Border Radius ────────────────────────────────────────────────────
      borderRadius: {
        DEFAULT: '0.25rem',
        'sm': '0.375rem',
        'md': '0.5rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'full': '9999px',
      },

      // ── Box Shadows ───────────────────────────────────────────────────────
      boxShadow: {
        'card': '0 2px 10px rgba(0,0,0,0.02)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.05)',
        'paper': '0 4px 24px rgba(0,0,0,0.06)',
        'header': '0 1px 2px rgba(0,0,0,0.05)',
        'bottom-bar': '0 -4px 24px rgba(0,0,0,0.04)',
        'bottom-nav': '0 -2px 15px rgba(0,0,0,0.05)',
      },

      // ── Aspect Ratios ─────────────────────────────────────────────────────
      aspectRatio: {
        'a4': '1 / 1.414',
      },
    },
  },
  plugins: [],
};

export default config;
