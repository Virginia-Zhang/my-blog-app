/**
 * @component LikeButton
 * @description Interactive like button component with state management and localStorage persistence.
 * @description ステート管理と localStorage による永続化を持つインタラクティブないいねボタンコンポーネント。
 * @param {Object} props - Component props
 * @param {Object} props コンポーネントのプロパティ
 * @param {string} props.postId - Post identifier for localStorage key
 * @param {string} props.postId localStorage キー用の記事識別子
 * @param {number} props.initialLikes - Initial number of likes
 * @param {number} props.initialLikes 初期のいいね数
 * @returns {JSX.Element} The like button component
 * @returns {JSX.Element} いいねボタンコンポーネント
 * @remarks Uses 'use client' directive for browser interactions and localStorage for persistence.
 * @remarks ブラウザインタラクションのため 'use client' ディレクティブと永続化のため localStorage を使用。
 */
"use client";

import { useState, useEffect } from "react";

type Props = {
  readonly postId: string;
  readonly initialLikes: number;
};

export default function LikeButton({ postId, initialLikes }: Props) {
  // Initialize with initialLikes to match server-side rendering
  // サーバーサイドレンダリングと一致させるため initialLikes で初期化
  const [likes, setLikes] = useState(initialLikes);
  const [isClicked, setIsClicked] = useState(false);

  // Load from localStorage after hydration (client-side only)
  // This is necessary to avoid hydration mismatch between server and client
  // ハイドレーション後に localStorage から読み込む（クライアント側のみ）
  // サーバーとクライアント間のハイドレーションミスマッチを避けるために必要
  useEffect(() => {
    const stored = localStorage.getItem(`likes-${postId}`);
    if (stored) {
      const storedLikes = Number.parseInt(stored, 10);
      // Update state after hydration to sync with localStorage
      // ハイドレーション後にステートを更新して localStorage と同期
      setLikes(storedLikes);
      setIsClicked(storedLikes > initialLikes);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  const handleClick = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    setIsClicked(true);
    // Save to localStorage
    // localStorage に保存
    localStorage.setItem(`likes-${postId}`, newLikes.toString());
  };

  return (
    <button
      onClick={handleClick}
      disabled={isClicked}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
        isClicked
          ? "bg-pink-100 text-pink-600 cursor-default"
          : "bg-gray-100 hover:bg-pink-50 text-gray-600 hover:text-pink-500"
      }`}
    >
      <span>♥</span>
      <span>{likes}</span>
      {isClicked && <span className="text-sm ml-1">Thanks!</span>}
    </button>
  );
}
