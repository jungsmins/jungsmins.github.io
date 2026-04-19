import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/lib/posts';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const title = post?.data.title ?? slug;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '64px',
          background: '#0f172a',
          color: '#ffffff',
        }}
      >
        <p
          style={{
            fontSize: '20px',
            color: '#94a3b8',
            margin: '0 0 16px',
          }}
        >
          개발자 박정민
        </p>
        <h1
          style={{
            fontSize: '64px',
            fontWeight: '800',
            lineHeight: '1.2',
            margin: 0,
            maxWidth: '900px',
          }}
        >
          {title}
        </h1>
      </div>
    ),
    size,
  );
}
