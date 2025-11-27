/**
 * 日記ページコンポーネント
 *
 * Nested Routes の例として実装されたページです。
 * URL は /blog/diary となり、blog フォルダの中に
 * diary フォルダを配置することで階層構造を実現しています。
 *
 * 共通テンプレートコンポーネント（BlogCategoryPage）を使用して
 * ページの構造を統一しています。
 *
 * @returns {JSX.Element} 日記ページの JSX 要素
 */
import BlogCategoryPage from "@/app/components/blog-category-page";

export default function DiaryPage() {
  const items = [
    {
      id: "lunch-curry",
      title: "今日のランチはカレーでした",
      link: "https://zenn.dev/virginia0314/articles/685295bc6362da",
    },
    {
      id: "cold-weather",
      title: "最近寒くなってきましたね",
      link: "https://zenn.dev/virginia0314/articles/685295bc6362da",
    },
    {
      id: "want-keyboard",
      title: "新しいキーボードが欲しい",
      link: "https://zenn.dev/virginia0314/articles/685295bc6362da",
    },
  ];

  return (
    <BlogCategoryPage
      title="📔 日記"
      description="日々のつぶやきや雑記です。"
      items={items}
    />
  );
}
