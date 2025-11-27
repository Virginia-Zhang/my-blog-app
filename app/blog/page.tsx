/**
 * ブログトップページコンポーネント
 *
 * ブログのカテゴリ一覧を表示するページです。
 * Nested Routes の例として、複数のカテゴリへのリンクを提供しています。
 *
 * @returns {JSX.Element} ブログトップページの JSX 要素
 */
import CategoryCard from "@/app/components/category-card";

interface Category {
  href: string;
  title: string;
  description: string;
  titleColor: string;
}

export default function BlogPage() {
  // カテゴリ情報を配列として管理
  const categories: Category[] = [
    {
      href: "/blog/tech",
      title: "💻 技術ブログ",
      description: "Next.js や React などの技術情報",
      titleColor: "text-blue-600",
    },
    {
      href: "/blog/diary",
      title: "📔 日記",
      description: "日常の出来事やポエムなど",
      titleColor: "text-green-600",
    },
    {
      href: "/blog/reviews",
      title: "🎬 映画・音楽レビュー & シェア",
      description: "最近観た映画や聴いた音楽の感想をシェア",
      titleColor: "text-purple-600",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">ブログトップ</h1>
      <p>ここでは、さまざまなジャンルの記事を発信しています。</p>
      <p className="mb-6">興味のあるカテゴリを選んでください。</p>

      <div className="flex gap-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.href}
            href={category.href}
            title={category.title}
            description={category.description}
            titleColor={category.titleColor}
          />
        ))}
      </div>
    </div>
  );
}
