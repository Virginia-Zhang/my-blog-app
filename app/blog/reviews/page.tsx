/**
 * 映画・音楽レビューページコンポーネント
 *
 * Nested Routes の例として実装されたページです。
 * URL は /blog/reviews となり、blog フォルダの中に
 * reviews フォルダを配置することで階層構造を実現しています。
 *
 * 共通テンプレートコンポーネント（BlogCategoryPage）を使用して
 * ページの構造を統一しています。
 *
 * @returns {JSX.Element} 映画・音楽レビューページの JSX 要素
 */
import BlogCategoryPage from "@/app/components/blog-category-page";

export default function ReviewsPage() {
  const items = [
    {
      id: "recent-movie-review",
      title: "最近観た映画の感想",
      link: "https://zenn.dev/virginia0314/articles/685295bc6362da",
    },
    {
      id: "favorite-album",
      title: "お気に入りの音楽アルバム紹介",
      link: "https://zenn.dev/virginia0314/articles/685295bc6362da",
    },
    {
      id: "movie-music-review",
      title: "映画・音楽のレビュー",
      link: "https://zenn.dev/virginia0314/articles/685295bc6362da",
    },
  ];

  return (
    <BlogCategoryPage
      title="🎬 映画・音楽レビュー & シェア"
      description="最近観た映画や聴いた音楽の感想をシェアしています。"
      items={items}
    />
  );
}
