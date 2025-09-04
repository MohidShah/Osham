
import type {Config} from 'tailwindcss';
const {fontFamily} = require('tailwindcss/defaultTheme');

export default {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-up': {
            '0%': {
                opacity: '0',
                transform: 'translateY(20px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        'blink': {
            '0%, 100%': { 'border-color': 'transparent' },
            '50%': { 'border-color': 'hsl(var(--primary))' },
        },
        'pulse-subtle': {
            '0%, 100%': { transform: 'scale(1)', opacity: '0.1' },
            '50%': { transform: 'scale(1.05)', opacity: '0.2' },
        },
        'spin-slow': {
            'from': { transform: 'rotate(0deg)' },
            'to': { transform: 'rotate(360deg)' },
        },
        'float': {
            '0%': { transform: 'translateY(0px)', opacity: '0' },
            '25%': { opacity: '1' },
            '50%': { transform: 'translateY(-30px)' },
            '75%': { opacity: '0' },
            '100%': { transform: 'translateY(-60px)', opacity: '0' },
        },
        'billing-flow': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '20%': { transform: 'translateX(0)', opacity: '1' },
          '80%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'blink': 'blink 1s step-end infinite',
        'pulse-subtle': 'pulse-subtle 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delay-1': 'float 6s ease-in-out 1s infinite',
        'float-delay-2': 'float 6s ease-in-out 2s infinite',
        'billing-flow-item-1': 'billing-flow 4s ease-in-out infinite',
        'billing-flow-item-2': 'billing-flow 4s ease-in-out 1s infinite',
        'billing-flow-item-3': 'billing-flow 4s ease-in-out 2s infinite',
      },
    },
  },
 plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
} satisfies Config;

    