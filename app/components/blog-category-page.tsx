/**
 * ブログカテゴリページ共通テンプレートコンポーネント
 *
 * ブログの各カテゴリページ（技術ブログ、日記、レビューなど）で
 * 共通して使用されるレイアウトとスタイルを提供します。
 *
 * @param {Readonly<BlogCategoryPageProps>} props - コンポーネントの props
 * @param {string} props.title - ページのタイトル（絵文字を含む）
 * @param {string} props.description - ページの説明文
 * @param {BlogItem[]} props.items - 表示する記事項目の配列（id, title, link を含む）
 * @returns {JSX.Element} ブログカテゴリページの JSX 要素
 */
import Link from "next/link";
import BackButton from "@/app/components/back-button";

export interface BlogItem {
  id: string;
  title: string;
  link: string;
}

interface BlogCategoryPageProps {
  title: string;
  description: string;
  items: BlogItem[];
}

export default function BlogCategoryPage({
  title,
  description,
  items,
}: Readonly<BlogCategoryPageProps>) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p className="mb-4">{description}</p>

      <ul className="list-disc pl-5 space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={item.link}
              className="text-blue-500 hover:text-blue-600 hover:underline"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <BackButton />
    </div>
  );
}
