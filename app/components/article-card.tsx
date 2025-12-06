/**
 * @component ArticleCard
 * @description Reusable article card component for displaying blog post previews.
 * @description ブログ記事プレビューを表示する再利用可能な記事カードコンポーネント。
 * @param {Object} props - Component props
 * @param {Object} props コンポーネントのプロパティ
 * @param {string} props.href - Link URL to the article
 * @param {string} props.href 記事へのリンク URL
 * @param {string} props.title - Article title
 * @param {string} props.title 記事のタイトル
 * @param {string} props.intro - Article introduction/summary
 * @param {string} props.intro 記事の紹介文/要約
 * @param {string} props.category - Article category
 * @param {string} props.category 記事のカテゴリ
 * @param {string} props.date - Publication date
 * @param {string} props.date 公開日
 * @returns {JSX.Element} The article card component
 * @returns {JSX.Element} 記事カードコンポーネント
 * @remarks Uses hover effects with shadow and transform for better UX.
 * @remarks より良い UX のため、シャドウとトランスフォームを使用したホバー効果を使用。
 */

import Link from "next/link";

type Props = {
  readonly href: string;
  readonly title: string;
  readonly intro: string;
  readonly category: string;
  readonly date: string;
};

export default function ArticleCard({
  href,
  title,
  intro,
  category,
  date,
}: Props) {
  return (
    <article className="bg-gray-200 border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
      <Link href={href} className="block">
        <h3 className="text-lg font-medium text-blue-600 hover:text-blue-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-3">{intro}</p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{category}</span>
          <time>{date}</time>
        </div>
      </Link>
    </article>
  );
}
