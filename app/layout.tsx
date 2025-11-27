/**
 * ルートレイアウトコンポーネント
 *
 * アプリ全体の共通レイアウトを定義します。
 * 全ページで共通のヘッダーナビゲーションを表示し、
 * 各ページのコンテンツを <main> タグ内にレンダリングします。
 *
 * @param {Readonly<{ children: React.ReactNode }>} props - 子要素（各ページのコンテンツ）
 * @returns {JSX.Element} ルートレイアウトの JSX 要素
 */
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {/* 共通ヘッダー */}
        <header className="p-4 bg-gray-200 border-b flex gap-6 text-gray-800">
          <Link href="/" className="font-bold hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
        </header>

        {/* 各ページの中身 */}
        <main>{children}</main>
      </body>
    </html>
  );
}
