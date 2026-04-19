import {
  createThemeContract,
  createGlobalTheme,
  globalStyle,
  assignVars,
} from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {
    gray: {
      50: null,
      100: null,
      200: null,
      300: null,
      400: null,
      500: null,
      600: null,
      700: null,
      800: null,
      900: null,
    },
    blue: {
      400: null,
      500: null,
      600: null,
    },
    bg: {
      page: null,
      subtle: null,
    },
    text: {
      default: null,
      muted: null,
      subtle: null,
    },
    border: {
      default: null,
      subtle: null,
    },
    accent: {
      default: null,
      hover: null,
    },
    highlight: null,
  },
  font: {
    body: null,
    mono: null,
  },
  fontSize: {
    xs: null,
    sm: null,
    base: null,
    lg: null,
    xl: null,
    '2xl': null,
    '3xl': null,
  },
  lineHeight: {
    tight: null,
    normal: null,
    relaxed: null,
  },
  space: {
    1: null,
    2: null,
    3: null,
    4: null,
    6: null,
    8: null,
    12: null,
    16: null,
  },
  radius: {
    sm: null,
    md: null,
    lg: null,
  },
});

const sharedTokens = {
  color: {
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    blue: {
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
    },
  },
  font: {
    body: 'var(--font-body), sans-serif',
    mono: 'var(--font-mono), monospace',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
  },
  lineHeight: {
    tight: '1.25',
    normal: '1.6',
    relaxed: '1.85',
  },
  space: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    6: '1.5rem',
    8: '2rem',
    12: '3rem',
    16: '4rem',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
};

createGlobalTheme(':root', vars, {
  ...sharedTokens,
  color: {
    ...sharedTokens.color,
    bg: {
      page: '#ffffff',
      subtle: '#f3f4f6',
    },
    text: {
      default: '#222222',
      muted: '#4b5563',
      subtle: '#6b7280',
    },
    border: {
      default: '#e5e7eb',
      subtle: '#d1d5db',
    },
    accent: {
      default: '#3b82f6',
      hover: '#2563eb',
    },
    highlight: '#8EACCD',
  },
});

globalStyle(':root', {
  '@media': {
    '(prefers-color-scheme: dark)': {
      vars: assignVars(vars, {
        ...sharedTokens,
        color: {
          ...sharedTokens.color,
          bg: {
            page: 'rgb(40,44,53)',
            subtle: 'rgb(30,33,41)',
          },
          text: {
            default: 'rgba(255,255,255,0.88)',
            muted: 'rgba(255,255,255,0.6)',
            subtle: 'rgba(255,255,255,0.4)',
          },
          border: {
            default: 'rgba(255,255,255,0.12)',
            subtle: 'rgba(255,255,255,0.08)',
          },
          accent: {
            default: '#ffa7c4',
            hover: '#ff7eb3',
          },
          highlight: '#8EACCD',
        },
      }),
    },
  },
});
