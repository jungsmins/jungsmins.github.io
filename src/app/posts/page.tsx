import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

function formatDate(date: string) {
  const d = new Date(date);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}.${mm}.${dd}`;
}

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          <span>{formatDate(post.date)}</span>
        </li>
      ))}
    </ul>
  );
}
