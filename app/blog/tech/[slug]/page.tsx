/**
 * @file page.tsx
 * @description Dynamic blog post detail page using Server Components.
 * @description Server Components を使用した動的ブログ記事詳細ページ。
 * @author Virginia Zhang
 * @remarks Demonstrates Server Component data fetching and props passing to Client Components.
 * @remarks Server Component のデータ取得と Client Components への props 渡しをデモ。
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import LikeButton from "@/app/components/like-button";
import { getPost } from "@/app/lib/posts";

/**
 * @description Server Component that fetches post data and renders the detail page.
 * @description 記事データを取得し、詳細ページをレンダリングする Server Component。
 * @param {Object} props - Page props
 * @param {Object} props ページのプロパティ
 * @param {Promise<{ slug: string }>} props.params - Dynamic route parameters
 * @param {Promise<{ slug: string }>} props.params 動的ルートパラメータ
 * @returns {JSX.Element} The post detail page
 * @returns {JSX.Element} 記事詳細ページ
 */
export default async function PostPage({
  params,
}: {
  readonly params: Promise<{ slug: string }>;
}) {
  // 動的ルートパラメータを取得。ここではslugが動的ルートパラメータになる（nextjs-1, nextjs-2, ...）。
  // Get dynamic route parameters. Here, slug is the dynamic route parameter (nextjs-1, nextjs-2, ...).
  const { slug } = await params;
  // 記事データを取得。ここではslugをキーにして記事データを取得する。
  // Get post data. Here, we get the post data by using the slug as the key.
  const post = await getPost(slug);
  // 記事が見つからない場合は404エラーを返す
  // If post is not found, return not-found page
  if (!post) {
    notFound();
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Back navigation */}
      <div className="mb-6">
        <Link
          href="/blog/tech"
          className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
        >
          ← 技術ブログ一覧に戻る
        </Link>
      </div>

      {/* Article header */}
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-white">{post.title}</h1>
          <div className="flex items-center justify-between text-gray-300">
            <time className="text-sm">
              公開日: {new Date(post.date).toLocaleDateString("ja-JP")}
            </time>
            <LikeButton postId={post.id} initialLikes={post.likes} />
          </div>
        </header>

        {/* Article content */}
        {/* 記事本文 */}
        <div className="prose prose-gray max-w-none">
          {/* Split content by newlines and render as paragraphs */}
          {/* 改行でコンテンツを分割し、段落としてレンダリング */}
          {post.content
            .trim()
            .split("\n\n")
            .map((paragraph, index) => {
              const paragraphKey = `paragraph-${index}`;

              // Handle markdown headers
              // Markdown ヘッダーを処理
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={paragraphKey}
                    className="text-2xl font-semibold mt-8 mb-4 text-gray-200"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }

              // Handle bullet points
              // 箇点リストを処理
              if (paragraph.startsWith("- ")) {
                const listItems = paragraph
                  .split("\n")
                  .filter((item) => item.trim());
                return (
                  <ul
                    key={paragraphKey}
                    className="list-disc list-inside mb-4 space-y-2"
                  >
                    {listItems.map((item, itemIndex) => (
                      <li
                        key={`${paragraphKey}-item-${itemIndex}`}
                        className="text-gray-200"
                      >
                        {item.replace("- ", "")}
                      </li>
                    ))}
                  </ul>
                );
              }

              // Handle numbered lists
              // 番号付きリストを処理
              const numberMatch = /^\d+\./.exec(paragraph);
              if (numberMatch) {
                const listItems = paragraph
                  .split("\n")
                  .filter((item) => item.trim());
                return (
                  <ol
                    key={paragraphKey}
                    className="list-decimal list-inside mb-4 space-y-2"
                  >
                    {listItems.map((item, itemIndex) => (
                      <li
                        key={`${paragraphKey}-item-${itemIndex}`}
                        className="text-gray-200"
                      >
                        {item.replace(/^\d+\.\s*/, "")}
                      </li>
                    ))}
                  </ol>
                );
              }

              // Regular paragraphs
              // 通常の段落
              return (
                <p
                  key={paragraphKey}
                  className="mb-4 text-gray-200 leading-relaxed"
                >
                  {paragraph}
                </p>
              );
            })}
        </div>
      </article>

      {/* Footer with navigation */}
      {/* ナビゲーション付きフッター */}
      <footer className="mt-12 pt-8 border-t border-gray-700">
        <div className="flex justify-between items-center">
          <Link
            href="/blog/tech"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← 他の記事を見る
          </Link>
          <Link href="/blog" className="text-gray-300 hover:text-gray-100">
            ブログトップへ →
          </Link>
        </div>
      </footer>
    </div>
  );
}
