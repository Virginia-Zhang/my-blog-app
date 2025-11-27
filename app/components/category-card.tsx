/**
 * カテゴリカードコンポーネント
 *
 * ブログのカテゴリを表示する再利用可能なカードコンポーネントです。
 * Next.js の <Link> コンポーネントを使用して、クライアントサイドナビゲーションを提供します。
 *
 * @param {Object} props - コンポーネントの props
 * @param {string} props.href - リンク先の URL
 * @param {string} props.title - カードのタイトル
 * @param {string} props.description - カードの説明文
 * @param {string} [props.titleColor="text-blue-600"] - タイトルの色クラス（オプション）
 * @returns {JSX.Element} カテゴリカードの JSX 要素
 */
import Link from "next/link";

interface CategoryCardProps {
  href: string;
  title: string;
  description: string;
  titleColor?: string;
}

export default function CategoryCard({
  href,
  title,
  description,
  titleColor = "text-blue-600",
}: Readonly<CategoryCardProps>) {
  return (
    <Link
      href={href}
      className="block w-80 p-6 border rounded-lg hover:bg-gray-200 shadow-sm transition-colors"
    >
      <h2 className={`text-xl font-bold mb-2 ${titleColor}`}>{title}</h2>
      <p className="text-gray-400">{description}</p>
    </Link>
  );
}
