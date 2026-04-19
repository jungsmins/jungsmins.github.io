import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const list = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[8],
});

export const item = style({
  display: 'block',
  textDecoration: 'none',
  color: 'inherit',
});

export const title = style({
  fontSize: vars.fontSize.xl,
  fontWeight: '700',
  margin: 0,
  selectors: {
    [`${item}:hover &`]: {
      color: vars.color.highlight,
    },
  },
});

export const date = style({
  marginTop: vars.space[1],
  fontSize: vars.fontSize.sm,
  color: vars.color.text.subtle,
});
