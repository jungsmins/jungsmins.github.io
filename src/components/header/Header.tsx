import Image from 'next/image';
import { LogoLink } from './LogoLink';
import { header, inner, nav, navLink, githubIconLight, githubIconDark } from './styles.css';

export function Header() {
  return (
    <header className={header}>
      <div className={inner}>
        <LogoLink>개발자 박정민</LogoLink>
        <nav className={nav}>
          <a href='https://github.com/jungsmins' target='_blank' rel='noopener noreferrer' className={navLink}>
            <Image src='/GitHub_Invertocat_Black.svg' alt='GitHub' width={24} height={24} className={githubIconLight} />
            <Image src='/GitHub_Invertocat_White.svg' alt='GitHub' width={24} height={24} className={githubIconDark} />
          </a>
        </nav>
      </div>
    </header>
  );
}
