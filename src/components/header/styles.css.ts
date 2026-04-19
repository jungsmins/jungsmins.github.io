import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const header = style({
  marginBottom: vars.space[8],
});

export const inner = style({
  maxWidth: '680px',
  margin: '0 auto',
  paddingInline: vars.space[6],
  paddingBlock: vars.space[4],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const logo = style({
  fontSize: vars.fontSize.xl,
  fontWeight: '700',
  color: vars.color.text.default,
  textDecoration: 'none',
});

export const logoWithHover = style([
  logo,
  {
    ':hover': {
      color: vars.color.highlight,
    },
  },
]);

export const nav = style({
  display: 'flex',
  gap: vars.space[6],
});

export const githubIconLight = style({
  display: 'block',
  '@media': {
    '(prefers-color-scheme: dark)': {
      display: 'none',
    },
  },
});

export const githubIconDark = style({
  display: 'none',
  '@media': {
    '(prefers-color-scheme: dark)': {
      display: 'block',
    },
  },
});

export const navLink = style({
  fontSize: vars.fontSize.sm,
  fontWeight: '700',
  color: vars.color.text.muted,
  textDecoration: 'none',
  ':hover': {
    color: vars.color.text.default,
  },
});
