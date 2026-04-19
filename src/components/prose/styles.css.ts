import { style } from '@vanilla-extract/css';
import { globalStyle } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

const LH = vars.lineHeight.normal; // line-height multiplier used throughout prose

export const prose = style({
  wordBreak: 'keep-all',
  wordWrap: 'break-word',
  lineHeight: LH,
  fontSize: vars.fontSize.base,
  color: vars.color.text.default,
});

globalStyle(`${prose} h1`, {
  fontSize: '2rem',
  fontWeight: '800',
  lineHeight: `calc(${LH} * 2rem)`,
  marginTop: 0,
  marginBottom: 0,
  paddingBottom: 0,
});

globalStyle(`${prose} h2`, {
  fontSize: '1.5rem',
  fontWeight: '700',
  lineHeight: `calc(${LH} * 1.5rem)`,
  marginBottom: `calc(${LH} * 0.5rem)`,
  paddingTop: `calc(${LH} * 1.25rem)`,
});

globalStyle(`${prose} h3`, {
  fontSize: '1.25rem',
  fontWeight: '700',
  lineHeight: `calc(${LH} * 1.25rem)`,
  marginBottom: `calc(${LH} * 0.25rem)`,
  paddingTop: `calc(${LH} * 1.15rem)`,
});

globalStyle(`${prose} h4`, {
  fontSize: '1.1rem',
  fontWeight: '600',
  lineHeight: `calc(${LH} * 1.1rem)`,
  marginBottom: `calc(${LH} * 0.25rem)`,
  paddingTop: `calc(${LH} * 1rem)`,
});

globalStyle(`${prose} p`, {
  margin: `calc(${LH} * 0.5rem) 0`,
  lineHeight: LH,
});

globalStyle(`${prose} a`, {
  color: vars.color.accent.default,
  textDecoration: 'underline',
  textDecorationColor: vars.color.accent.default,
  textDecorationThickness: '0.05rem',
  textUnderlineOffset: '3px',
});

globalStyle(`${prose} a:hover`, {
  textDecoration: 'none',
  color: vars.color.accent.hover,
});

globalStyle(`${prose} :not(pre) > code`, {
  fontFamily: vars.font.mono,
  backgroundColor: vars.color.bg.subtle,
  padding: '0.11rem 0.3rem',
  marginRight: '0.2rem',
  borderRadius: '0.3rem',
  fontSize: '0.9rem',
});

globalStyle(`${prose} pre`, {
  padding: '1.5rem',
  borderRadius: '0.8rem',
  marginBlock: `calc(${LH} * 0.5rem)`,
  marginInline: '-1.2rem',
  overflow: 'auto',
  lineHeight: '1.5rem',
});

globalStyle(`${prose} pre *`, {
  fontFamily: vars.font.mono,
  fontSize: '0.9rem',
  fontWeight: '400',
  letterSpacing: '-0.03rem',
  whiteSpace: 'pre',
  tabSize: 2,
});

globalStyle(`${prose} blockquote`, {
  paddingLeft: `calc(${LH} * 0.5rem)`,
  paddingBlock: `calc(${LH} * 0.25rem)`,
  borderLeft: `0.125rem solid ${vars.color.border.subtle}`,
  margin: `calc(${LH} * 0.5rem) 0`,
  color: vars.color.text.muted,
});

globalStyle(`${prose} ul`, {
  listStyle: 'square',
  paddingLeft: `calc(${LH} * 1rem)`,
  margin: `calc(${LH} * 0.5rem) 0`,
});

globalStyle(`${prose} ul ul`, {
  listStyle: 'circle',
});

globalStyle(`${prose} ul ul ul`, {
  listStyle: 'disc',
});

globalStyle(`${prose} ol`, {
  listStyle: 'decimal',
  paddingLeft: `calc(${LH} * 1rem)`,
  margin: `calc(${LH} * 0.5rem) 0`,
});

globalStyle(`${prose} li`, {
  lineHeight: LH,
  margin: '0.25rem 0',
});

globalStyle(`${prose} img`, {
  maxWidth: '100%',
  borderRadius: '0.5rem',
});

globalStyle(`${prose} hr`, {
  border: 0,
  borderTop: `1px solid ${vars.color.border.subtle}`,
  margin: `calc(${LH} * 0.5rem) 0`,
});

globalStyle(`${prose} table`, {
  display: 'block',
  width: '100%',
  overflow: 'auto',
  borderCollapse: 'collapse',
  margin: `calc(${LH} * 0.5rem) 0`,
});

globalStyle(`${prose} table td, ${prose} table th`, {
  padding: `calc(${LH} * 0.25rem)`,
  border: `0.125rem solid ${vars.color.border.default}`,
});
