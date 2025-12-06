/**
 * @file posts-data.ts
 * @description Blog posts data array with extended metadata.
 * @description 拡張メタデータを含むブログ記事データ配列。
 * @author Virginia Zhang
 * @remarks Contains all blog post data including intro and category for display purposes.
 * @remarks 表示用のイントロとカテゴリを含むすべてのブログ記事データを含む。
 */

/**
 * Blog post data structure with display metadata
 * 表示メタデータを含むブログ記事のデータ構造
 */
export type PostData = {
  id: string;
  title: string;
  content: string;
  date: string;
  likes: number;
  intro: string;
  category: string;
};

/**
 * All blog posts data
 * すべてのブログ記事データ
 */
export const postsData: PostData[] = [
  {
    id: "nextjs-1",
    title: "Next.js 16 入門 ①：フロントエンド進化と Next.js の登場",
    content: `
Next.js 16 入門シリーズ第 1 回です。

近年、フロントエンド開発の世界は急速に進化しています。かつては jQuery で DOM を直接操作していた時代から、React や Vue などの UI ライブラリが登場し、コンポーネントベースの開発が当たり前になりました。

そして今、Next.js がその中心にいます。

## なぜ Next.js なのか？

React は素晴らしいライブラリですが、あくまで「UI ライブラリ」です。ルーティングやデータ取得、SEO 対策などは開発者が自分で組み合わせる必要がありました。
Next.js は、これらをオールインワンで提供する「フレームワーク」です。

特に Next.js 16 では、**Server Actions** や **App Router** が安定版となり、開発体験が劇的に向上しています。
    `,
    date: "2025-12-01",
    likes: 10,
    intro: "近年、フロントエンド開発の世界は急速に進化しています。",
    category: "技術ブログ",
  },
  {
    id: "nextjs-2",
    title: "Next.js 16 入門 ②：Router システムとレンダリング戦略の完全解説",
    content: `
Next.js 16 入門シリーズ第 2 回です。

今回は Next.js の心臓部とも言える「App Router」について解説します。
従来の Pages Router とは何が違うのでしょうか？

## App Router の特徴

1. **File-system Routing**: フォルダ構造がそのまま URL になる直感的な仕組み。
2. **Layouts**: ページ間で共通の UI（ヘッダーやサイドバー）を簡単に再利用可能。
3. **Server Components**: デフォルトでサーバー側でレンダリングされるため、パフォーマンスが高い。

これらを理解することで、Next.js の真価を発揮できます。
    `,
    date: "2025-12-03",
    likes: 25,
    intro: "Next.js の心臓部とも言える「App Router」について解説します。",
    category: "技術ブログ",
  },
  {
    id: "nextjs-3",
    title: "Next.js 16 入門 ③：レンダリング戦略解説：CSR/SSR/SSG/ISR",
    content: `
Next.js 16 入門シリーズ第 3 回です。

Web アプリケーションのパフォーマンスを左右する「レンダリング戦略」について学びます。

- **CSR (Client Side Rendering)**: ブラウザで描画。インタラクティブだが初期表示が遅い。
- **SSR (Server Side Rendering)**: リクエストごとにサーバーで描画。常に最新データ。
- **SSG (Static Site Generation)**: ビルド時に HTML を生成。爆速だが更新が遅れる。
- **ISR (Incremental Static Regeneration)**: SSG の弱点を補う、定期的な再生成技術。

Next.js ではこれらをページごとに柔軟に使い分けることができます。
    `,
    date: "2025-12-06",
    likes: 18,
    intro:
      "Web アプリケーションのパフォーマンスを左右する「レンダリング戦略」について学びます。",
    category: "技術ブログ",
  },
];
