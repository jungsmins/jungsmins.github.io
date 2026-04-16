import { getAllSlugs, getPostBySlug } from '@/lib/posts';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Prose } from '@/components/prose/Prose';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();
  return {
    title: post.data.title,
    description: post.data.description,
    openGraph: {
      title: post.data.title,
      description: post.data.description,
      type: 'article',
      publishedTime: post.data.date,
      authors: ['박정민'],
      tags: post.data.tags,
      locale: 'ko_KR',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.data.title,
      description: post.data.description,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();
  const { title, date, description, tags } = post.data;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    author: { '@type': 'Person', name: '박정민' },
    datePublished: date,
    keywords: tags?.join(', '),
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Prose>
        <article dangerouslySetInnerHTML={{ __html: post.content }} />
      </Prose>
    </>
  );
}
