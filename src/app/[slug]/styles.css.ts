import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const postHeader = style({
  marginBottom: vars.space[8],
});

globalStyle(`${postHeader} h1`, {
  fontSize: '2rem',
  fontWeight: '800',
  lineHeight: 'calc(1.7 * 2rem)',
  margin: 0,
});


export const postDate = style({
  marginTop: vars.space[2],
  fontSize: vars.fontSize.sm,
  color: vars.color.text.subtle,
});

export const backLink = style({
  display: 'inline-block',
  marginTop: vars.space[16],
  fontSize: vars.fontSize.sm,
  color: vars.color.text.default,
  textDecoration: 'underline',
  textUnderlineOffset: '3px',
  ':hover': {
    color: vars.color.highlight,
  },
});
