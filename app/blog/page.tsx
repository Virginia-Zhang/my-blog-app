/**
 * @file page.tsx
 * @description Blog top page component displaying categories and latest articles.
 * @description カテゴリと最新記事を表示するブログトップページコンポーネント。
 * @author Virginia Zhang
 * @remarks Uses ArticleCard component for reusable article display and postsData for dynamic content.
 * @remarks 再利用可能な記事表示のため ArticleCard コンポーネントと動的コンテンツのため postsData を使用。
 */
import CategoryCard from "@/app/components/category-card";
import ArticleCard from "@/app/components/article-card";
import { postsData } from "@/app/data/posts-data";

interface Category {
  href: string;
  title: string;
  description: string;
  titleColor: string;
}

export default function BlogPage() {
  // Sort posts by date in descending order (newest first)
  // 日付で降順にソート（新しい順）
  const sortedPosts = [...postsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

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

      {/* Latest Articles Section */}
      {/* 最新記事セクション */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-6 text-gray-300">
          最新記事 (Latest Articles)
        </h2>
        <div className="space-y-4">
          {sortedPosts.map((post) => (
            <ArticleCard
              key={post.id}
              href={`/blog/tech/${post.id}`}
              title={post.title}
              intro={post.intro}
              category={post.category}
              date={post.date}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
