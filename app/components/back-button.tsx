/**
 * 戻るボタンコンポーネント
 *
 * ブラウザの履歴を利用して前のページに戻る機能を提供します。
 * useRouter の router.back() メソッドを使用して実装されています。
 *
 * Client Component として実装されているため、'use client' ディレクティブが必要です。
 *
 * @returns {JSX.Element} 戻るボタンの JSX 要素
 */
"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mt-8 text-sm text-gray-300 hover:text-gray-200 underline"
    >
      ← 前のページに戻る
    </button>
  );
}
