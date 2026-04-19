import { getAllPosts } from '@/lib/posts';
import { formatDate } from '@/lib/date';
import Link from 'next/link';
import { list, item, title, date } from './styles.css';

export default function Home() {
  const posts = getAllPosts();

  return (
    <ul className={list}>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/${post.slug}`} className={item}>
            <h2 className={title}>{post.title}</h2>
            <p className={date}>{formatDate(post.date)}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
