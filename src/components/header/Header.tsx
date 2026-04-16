import Link from 'next/link';
import { header, inner, logo, nav, navLink } from './styles.css';

export function Header() {
  return (
    <header className={header}>
      <div className={inner}>
        <Link href='/' className={logo}>
          개발자 박정민
        </Link>
        <nav className={nav}>
          <Link href='/posts' className={navLink}>
            Posts
          </Link>
        </nav>
      </div>
    </header>
  );
}
