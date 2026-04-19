'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { logo, logoWithHover } from './styles.css';

export function LogoLink({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPostPage = pathname !== '/';

  return (
    <Link href='/' className={isPostPage ? logoWithHover : logo}>
      {children}
    </Link>
  );
}
