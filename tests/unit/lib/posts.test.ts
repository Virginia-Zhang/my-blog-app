/**
 * @file posts.test.ts
 * @description Unit tests for posts library utilities for fetching blog posts.
 * @description ブログ記事を取得するための posts ライブラリユーティリティのユニットテスト。
 * @author Virginia Zhang
 * @remarks Tests async database simulation functions using bun:test framework.
 * @remarks bun:test フレームワークを使用した非同期データベースシミュレーション関数のテスト。
 */

import { expect, test, describe } from "bun:test";
import { getPosts, getPost } from "@/app/lib/posts";

describe("posts library", () => {
  test("getPosts returns all posts", async () => {
    const posts = await getPosts();
    expect(posts).toBeArray();
    expect(posts.length).toBeGreaterThan(0);
    expect(posts[0]).toHaveProperty("id");
    expect(posts[0]).toHaveProperty("title");
  });

  test("getPost returns a specific post by slug", async () => {
    const slug = "nextjs-1";
    const post = await getPost(slug);
    expect(post).toBeDefined();
    expect(post?.id).toBe(slug);
    expect(post?.title).toContain("Next.js 16 入門 ①");
  });

  test("getPost returns undefined for non-existent slug", async () => {
    const post = await getPost("non-existent");
    expect(post).toBeUndefined();
  });
});
