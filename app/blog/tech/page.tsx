/**
 * 技術ブログページコンポーネント
 *
 * Nested Routes の例として実装されたページです。
 * URL は /blog/tech となり、blog フォルダの中に
 * tech フォルダを配置することで階層構造を実現しています。
 *
 * 共通テンプレートコンポーネント（BlogCategoryPage）を使用して
 * ページの構造を統一しています。
 *
 * @returns {JSX.Element} 技術ブログページの JSX 要素
 */
import BlogCategoryPage from "@/app/components/blog-category-page";

export default function TechBlogPage() {
  const items = [
    {
      id: "nextjs-1",
      title: "Next.js 16 入門 ①：フロントエンド進化と Next.js の登場",
      link: "/blog/tech/nextjs-1",
    },
    {
      id: "nextjs-2-router",
      title: "Next.js 16 入門 ②：Router システムとレンダリング戦略の完全解説",
      link: "/blog/tech/nextjs-2",
    },
    {
      id: "nextjs-3",
      title: "Next.js 16 入門 ③：レンダリング戦略解説：CSR/SSR/SSG/ISR",
      link: "/blog/tech/nextjs-3",
    },
  ];

  return (
    <BlogCategoryPage
      title="💻 技術ブログ"
      description="技術に関する記事一覧です。"
      items={items}
    />
  );
}
