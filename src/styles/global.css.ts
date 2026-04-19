import { globalStyle } from '@vanilla-extract/css';
import { vars } from './tokens.css';

globalStyle('html', {
  colorScheme: 'light dark',
});

globalStyle('body', {
  fontFamily: vars.font.body,
  fontSize: vars.fontSize.base,
  lineHeight: vars.lineHeight.relaxed,
  color: vars.color.text.default,
  backgroundColor: vars.color.bg.page,
});

globalStyle('::selection', {
  backgroundColor: vars.color.accent.default,
  color: '#ffffff',
});

globalStyle('::-webkit-scrollbar', {
  width: '6px',
});

globalStyle('::-webkit-scrollbar-track', {
  background: 'transparent',
});

globalStyle('::-webkit-scrollbar-thumb', {
  background: vars.color.border.subtle,
  borderRadius: vars.radius.sm,
});
