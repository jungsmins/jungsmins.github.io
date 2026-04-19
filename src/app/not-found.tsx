import Link from 'next/link';
import { wrapper, message, homeLink } from './not-found.css';

export default function NotFound() {
  return (
    <div className={wrapper}>
      <p className={message}>글이 존재하지 않습니다.</p>
      <Link href='/' className={homeLink}>홈으로 돌아가기</Link>
    </div>
  );
}
