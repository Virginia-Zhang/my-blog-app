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
import { Mail } from "lucide-react";
import GithubIcon from "./components/icons/github-icon";
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
        <header className="p-4 bg-gray-200 border-b flex items-center gap-6 text-gray-800">
          <Link href="/" className="font-bold hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>

          {/* 外部リンク（アイコン） */}
          <div className="ml-auto flex gap-4">
            <a
              href="https://github.com/Virginia-Zhang/my-blog-app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
              aria-label="GitHub"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href="mailto:zhangsakurayi@qq.com"
              className="hover:text-blue-600"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </header>

        {/* 各ページの中身 */}
        <main>{children}</main>
      </body>
    </html>
  );
}
