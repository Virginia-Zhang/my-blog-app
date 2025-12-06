/**
 * @file not-found.tsx
 * @description Not found page for blog post detail routes.
 * @description ブログ記事詳細ルートの404ページ。
 * @author Virginia Zhang
 * @remarks Custom 404 page for when a blog post slug doesn't exist.
 * @remarks ブログ記事のスラッグが存在しない場合のカスタム404ページ。
 */

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        {/* 404 Icon/Illustration */}
        <div className="mb-6">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            記事が見つかりません
          </h2>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <p className="text-gray-600 mb-4">
            お探しの記事は存在しないか、削除された可能性があります。
          </p>
          <p className="text-sm text-gray-500">
            URL を確認するか、記事一覧からお探しの記事をお探しください。
          </p>
        </div>

        {/* Navigation Options */}
        <div className="space-y-3">
          <Link
            href="/blog/tech"
            className="block w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            技術ブログ一覧に戻る
          </Link>

          <Link
            href="/blog"
            className="block w-full bg-gray-200 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            ブログトップへ
          </Link>

          <Link
            href="/"
            className="block w-full bg-gray-100 text-gray-600 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors text-sm"
          >
            ホームに戻る
          </Link>
        </div>

        {/* Additional Help */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            問題が続く場合は、お問い合わせフォームからご連絡ください。
          </p>
        </div>
      </div>
    </div>
  );
}

