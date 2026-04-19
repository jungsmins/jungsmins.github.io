import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  paddingTop: vars.space[16],
  gap: vars.space[4],
});

export const message = style({
  fontSize: vars.fontSize.lg,
  color: vars.color.text.muted,
  margin: 0,
});

export const homeLink = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.subtle,
  textDecoration: 'underline',
  textUnderlineOffset: '3px',
  ':hover': {
    color: vars.color.highlight,
  },
});
