import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const header = style({
  borderBottom: `1px solid ${vars.color.gray[200]}`,
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
  fontSize: vars.fontSize.base,
  fontWeight: '700',
  color: vars.color.gray[900],
  textDecoration: 'none',
});

export const nav = style({
  display: 'flex',
  gap: vars.space[6],
});

export const navLink = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.gray[600],
  textDecoration: 'none',
  ':hover': {
    color: vars.color.gray[900],
  },
});
