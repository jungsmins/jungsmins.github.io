import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const container = style({
  maxWidth: '680px',
  margin: `${vars.space[8]} auto`,
  paddingInline: vars.space[6],
});
