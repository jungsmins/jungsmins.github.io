import { style } from '@vanilla-extract/css';
import { globalStyle } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const prose = style({
  wordBreak: 'keep-all',
  wordWrap: 'break-word',
  lineHeight: '1.7',
  color: vars.color.gray[800],
});

globalStyle(`${prose} h1`, {
  fontSize: '2rem',
  fontWeight: '800',
  lineHeight: 'calc(1.7 * 2rem)',
  marginTop: 0,
  marginBottom: 0,
  paddingBottom: 0,
});

globalStyle(`${prose} h2`, {
  fontSize: '1.15rem',
  fontWeight: '600',
  lineHeight: 'calc(1.7 * 1.5rem)',
  marginBottom: 'calc(1.7 * 0.5rem)',
  paddingTop: 'calc(1.7 * 1.25rem)',
});

globalStyle(`${prose} h3`, {
  fontSize: '1.05rem',
  fontWeight: '600',
  lineHeight: 'calc(1.7 * 1.2rem)',
  marginBottom: 'calc(1.7 * 0.25rem)',
  paddingTop: 'calc(1.7 * 1.15rem)',
});

globalStyle(`${prose} h4`, {
  fontSize: '1rem',
  fontWeight: '600',
  lineHeight: 'calc(1.7 * 1.1rem)',
  marginBottom: 'calc(1.7 * 0.25rem)',
  paddingTop: 'calc(1.7 * 1rem)',
});

globalStyle(`${prose} p`, {
  margin: 'calc(1.7 * 0.5rem) 0',
  lineHeight: '1.7',
});

globalStyle(`${prose} a`, {
  color: vars.color.blue[500],
  textDecoration: 'underline',
  textDecorationColor: vars.color.blue[500],
  textDecorationThickness: '0.05rem',
  textUnderlineOffset: '3px',
});

globalStyle(`${prose} a:hover`, {
  textDecoration: 'none',
  color: vars.color.blue[600],
});

globalStyle(`${prose} :not(pre) > code`, {
  fontFamily: vars.font.mono,
  backgroundColor: vars.color.gray[100],
  padding: '0.11rem 0.3rem',
  marginRight: '0.2rem',
  border: `1px solid ${vars.color.gray[200]}`,
  borderRadius: '0.3rem',
  fontSize: '0.9rem',
});

globalStyle(`${prose} pre`, {
  padding: '1.5rem',
  borderRadius: '0.8rem',
  marginLeft: '-1.2rem',
  marginRight: '-1.2rem',
  overflow: 'auto',
  lineHeight: '1.5rem',
  margin: 'calc(1.7 * 0.5rem) 0',
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
  paddingLeft: 'calc(1.7 * 0.5rem)',
  borderLeft: `0.125rem solid ${vars.color.gray[300]}`,
  margin: 'calc(1.7 * 0.5rem) 0',
  color: vars.color.gray[600],
});

globalStyle(`${prose} ul`, {
  listStyle: 'square',
  paddingLeft: 'calc(1.7 * 1rem)',
  margin: 'calc(1.7 * 0.5rem) 0',
});

globalStyle(`${prose} ul ul`, {
  listStyle: 'circle',
});

globalStyle(`${prose} ul ul ul`, {
  listStyle: 'disc',
});

globalStyle(`${prose} ol`, {
  listStyle: 'auto',
  paddingLeft: 'calc(1.7 * 1rem)',
  margin: 'calc(1.7 * 0.5rem) 0',
});

globalStyle(`${prose} li`, {
  lineHeight: '1.7',
  margin: '0.25rem 0',
});

globalStyle(`${prose} img`, {
  maxWidth: '100%',
  borderRadius: '0.5rem',
});

globalStyle(`${prose} hr`, {
  border: 0,
  borderTop: `1px dashed ${vars.color.gray[300]}`,
  margin: 'calc(1.7 * 0.5rem) 0',
});

globalStyle(`${prose} table`, {
  display: 'block',
  width: '100%',
  overflow: 'auto',
  borderCollapse: 'collapse',
  margin: 'calc(1.7 * 0.5rem) 0',
});

globalStyle(`${prose} table td, ${prose} table th`, {
  padding: 'calc(1.7 * 0.25rem)',
  border: `0.125rem solid ${vars.color.gray[200]}`,
});
