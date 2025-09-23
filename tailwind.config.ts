import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cinzel': ['var(--font-cinzel)', 'serif'],
        'noto': ['var(--font-noto)', 'sans-serif'],
      },
      typography: ({ theme }) => ({
        invert: {
          css: {
            '--tw-prose-headings': theme('colors.yellow[200]'),
            '--tw-prose-body': theme('colors.emerald[100]'),
            '--tw-prose-links': theme('colors.yellow[400]'),
            '--tw-prose-bullets': theme('colors.yellow[300]'),
            '--tw-prose-quotes': theme('colors.emerald[100]'),
            '--tw-prose-quote-borders': theme('colors.emerald[700]'),
            '--tw-prose-strong': theme('colors.yellow[100]'),
          },
        },
      }),
    },
  },
  plugins: [typography],
} satisfies Config;