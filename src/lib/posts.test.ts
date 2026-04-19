import { describe, it, expect } from 'vitest';
import path from 'path';
import { getAllPosts, getPostBySlug, getAllSlugs } from './posts';

const fixtureDir = path.join(process.cwd(), 'src/lib/__fixtures__/posts');

describe('getAllPosts', () => {
  it('포스트 목록을 반환한다', () => {
    const posts = getAllPosts(fixtureDir);
    expect(posts.length).toBeGreaterThan(0);
  });

  it('각 포스트에 title, date, slug가 있다', () => {
    const posts = getAllPosts(fixtureDir);
    posts.forEach((post) => {
      expect(post.title).toBeDefined();
      expect(post.date).toBeDefined();
      expect(post.slug).toBeDefined();
    });
  });

  it('날짜 최신순으로 정렬된다', () => {
    const posts = getAllPosts(fixtureDir);
    for (let i = 0; i < posts.length - 1; i++) {
      const current = new Date(posts[i].date).getTime();
      const next = new Date(posts[i + 1].date).getTime();
      expect(current).toBeGreaterThanOrEqual(next);
    }
  });
});

describe('getPostBySlug', () => {
  it('slug로 포스트를 가져온다', async () => {
    const post = await getPostBySlug('fixture-post1', fixtureDir);
    expect(post).not.toBeNull();
    expect(post!.data.title).toBe('픽스처 포스트 1');
  });

  it('content가 HTML로 변환된다', async () => {
    const post = await getPostBySlug('fixture-post1', fixtureDir);
    expect(post).not.toBeNull();
    expect(post!.content).toContain('<h2>');
  });

  it('존재하지 않는 slug는 null을 반환한다', async () => {
    const post = await getPostBySlug('없는포스트', fixtureDir);
    expect(post).toBeNull();
  });
});

describe('getAllSlugs', () => {
  it('slug 목록을 반환한다', () => {
    const slugs = getAllSlugs(fixtureDir);
    expect(slugs.length).toBeGreaterThan(0);
  });

  it('slug에 .md 확장자가 없다', () => {
    const slugs = getAllSlugs(fixtureDir);
    slugs.forEach((slug) => {
      expect(slug).not.toContain('.md');
    });
  });

  it('fixture-post1 slug가 포함된다', () => {
    const slugs = getAllSlugs(fixtureDir);
    expect(slugs).toContain('fixture-post1');
  });
});
