/**
 * @file page.tsx
 * @description The main landing page of the blog demo application.
 * @description ブログデモアプリケーションのメインランディングページ。
 * @author Virginia Zhang
 * @remarks This is a Server Component that serves as the entry point for the homepage.
 * @remarks ホームページの入口となるサーバーコンポーネントです。
 */
import Link from "next/link"; // 必ず next/link からインポート

export default function Home() {
  // Log the current runtime for verification in production (Server Side)
  // 本番環境でのランタイムを検証するためにログ出力（サーバーサイド）
  console.log(
    `[Runtime Check] Current runtime: ${
      process.versions.bun
        ? "Bun " + process.versions.bun
        : "Node.js " + process.version
    }`
  );

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
