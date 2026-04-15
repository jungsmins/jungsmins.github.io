import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export default function PostsPage() {
  const posts = getAllPosts();

  console.log(posts);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
