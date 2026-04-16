import { globalStyle } from '@vanilla-extract/css';
import { vars } from './tokens.css';

globalStyle('body', {
  fontFamily: vars.font.body,
  fontSize: vars.fontSize.base,
  lineHeight: vars.lineHeight.relaxed,
  color: vars.color.gray[900],
  backgroundColor: vars.color.gray[50],
});

globalStyle('::selection', {
  backgroundColor: vars.color.blue[500],
  color: '#ffffff',
});

globalStyle('::-webkit-scrollbar', {
  width: '6px',
});

globalStyle('::-webkit-scrollbar-track', {
  background: 'transparent',
});

globalStyle('::-webkit-scrollbar-thumb', {
  background: vars.color.gray[300],
  borderRadius: vars.radius.sm,
});
