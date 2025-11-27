/**
 * お問い合わせボタンコンポーネント
 *
 * useRouter Hook を使用したプログラム制御による画面遷移の例です。
 * ボタンクリック時に router.push() を使ってトップページへ遷移します。
 *
 * Client Component として実装されているため、'use client' ディレクティブが必要です。
 *
 * @returns {JSX.Element} お問い合わせボタンの JSX 要素
 */
"use client"; // Client Component として動作させるため必須

import { useRouter } from "next/navigation"; // App Router では next/navigation からインポート（next/router ではない点に注意）

export default function ContactButton() {
  const router = useRouter();

  const handleClick = () => {
    // ここで送信処理などを実行...
    alert("送信完了！トップページに戻ります。");

    // トップページへ遷移
    router.push("/");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-gray-800 text-white px-4 py-2 rounded mt-4 hover:bg-gray-700"
    >
      送信して戻る
    </button>
  );
}
