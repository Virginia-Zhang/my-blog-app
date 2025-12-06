/**
 * @file posts.ts
 * @description Mock data utilities for blog posts and database simulation.
 * @description ブログ記事のモックデータとデータベースシミュレーションのユーティリティ。
 * @author Virginia Zhang
 * @remarks Provides async functions that simulate database operations for Server Components.
 * @remarks Server Components のためのデータベース操作をシミュレートした非同期関数を提供。
 */

import { postsData, type PostData } from "@/app/data/posts-data";

/**
 * @description Simulates async database query to fetch all blog posts.
 * @description すべてのブログ記事を取得する非同期データベースクエリをシミュレート。
 * @returns Promise resolving to array of all posts.
 * @returns すべての記事を含む配列に解決されるプロミス。
 */
export async function getPosts(): Promise<PostData[]> {
  // Simulate network delay 500ms
  // ネットワーク遅延 500ms をシミュレート
  await new Promise((resolve) => setTimeout(resolve, 500));
  return postsData;
}

/**
 * @description Simulates async database query to fetch a single post by slug.
 * @description スラッグに基づいて単一の記事を取得する非同期データベースクエリをシミュレート。
 * @param slug The post identifier
 * @param slug 記事の識別子
 * @returns Promise resolving to the post or undefined if not found.
 * @returns 記事が見つかった場合は記事に解決され、見つからない場合は undefined に解決されるプロミス。
 */
export async function getPost(slug: string): Promise<PostData | undefined> {
  // Simulate network delay 500ms
  // ネットワーク遅延 500ms をシミュレート
  await new Promise((resolve) => setTimeout(resolve, 500));
  return postsData.find((post) => post.id === slug);
}
