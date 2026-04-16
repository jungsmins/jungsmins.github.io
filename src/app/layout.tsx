import type { Metadata } from 'next';
import { Noto_Sans_KR, JetBrains_Mono } from 'next/font/google';
import '@/styles/reset.css';
import '@/styles/global.css';
import { theme } from '@/styles/tokens.css';
import { Container } from '@/components/container/Container';
import { Header } from '@/components/header/Header';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: { default: '박정민 블로그', template: '%s | 박정민 블로그' },
  description: '개발자 박정민의 블로그입니다.',
  robots: { index: true, follow: true },
  openGraph: {
    locale: 'ko_KR',
    type: 'website',
    siteName: '박정민 블로그',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={`${theme} ${notoSansKR.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Header />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
