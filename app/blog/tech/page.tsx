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
      id: "nextjs-16-features",
      title: "Next.js 16 の新機能について",
      link: "https://zenn.dev/virginia0314/articles/685295bc6362da",
    },
    {
      id: "react-server-components",
      title: "React Server Components とは",
      link: "https://zenn.dev/virginia0314/articles/685295bc6362da",
    },
    {
      id: "tailwind-css-tips",
      title: "Tailwind CSS の活用術",
      link: "https://zenn.dev/virginia0314/articles/685295bc6362da",
    },
    {
      id: "client-server-component",
      title: "Client Component と Server Component の使い分け",
      link: "https://zenn.dev/virginia0314/articles/685295bc6362da",
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
