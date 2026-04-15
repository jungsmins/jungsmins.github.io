import matter from 'gray-matter';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeShiki from '@shikijs/rehype';
import rehypeStringify from 'rehype-stringify';
import fs from 'fs';
import path from 'path';

const postDir = path.join(process.cwd(), 'content/posts');

export function getAllPosts(dir = postDir) {
  const files = fs.readdirSync(dir);

  return files
    .map((filename) => {
      const file = fs.readFileSync(path.join(dir, filename), 'utf-8');
      return matter(file).data;
    })
    .filter((data) => data.published === true)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string, dir = postDir) {
  const filePath = path.join(dir, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const file = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(file);

  const result = await remark()
    .use(remarkRehype)
    .use(rehypeShiki, { theme: 'github-dark' })
    .use(rehypeStringify)
    .process(content);
  const htmlContent = result.toString();

  return {
    data,
    content: htmlContent,
  };
}

export function getAllSlugs(dir = postDir) {
  return getAllPosts(dir).map((post) => post.slug);
}
