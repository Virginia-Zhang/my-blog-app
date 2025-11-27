/**
 * トップページコンポーネント
 *
 * サイトのホームページです。
 * Next.js の <Link> コンポーネントを使用した
 * クライアントサイドナビゲーションの例を示しています。
 *
 * @returns {JSX.Element} トップページの JSX 要素
 */
import Link from "next/link"; // 必ず next/link からインポート

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Home ページ</h1>

      <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h2 className="text-xl font-bold mb-3 text-gray-900">
          このプロジェクトについて（Blog Demo Project）
        </h2>
        <p className="text-gray-700 leading-relaxed">
          このブログデモプロジェクトは、Next.js 16
          入門シリーズのチュートリアル用に作成されたものです。
          コードと実際のプロジェクトを通じて、Next.js
          の知識を学び、理解を深めることを目的としています。
        </p>
      </div>

      <div className="flex gap-4">
        <Link
          href="/about"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Aboutへ
        </Link>

        <Link
          href="/blog"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Blogへ
        </Link>
      </div>
    </div>
  );
}
