# Next.js 16 ブログデモプロジェクト（Blog Demo Project）

このプロジェクトは、Next.js 16 入門シリーズのチュートリアル用に作成されたブログサイトのデモです。
実際のコードとプロジェクトを通じて、Next.js の機能やベストプラクティスを学ぶことができます。

## プロジェクトの概要

このデモプロジェクトでは、以下の Next.js の主要機能を実装しています：

- **File-system Routing**: App Router を使ったページルーティング
- **Client-side Navigation**: `<Link>` コンポーネントと `useRouter` Hook
- **Server-side Navigation**: `redirect` 関数と Proxy（旧 Middleware）
- **Nested Routes**: 階層構造のあるルーティング
- **Server Components / Client Components**: コンポーネントの使い分け
- **共通レイアウト**: `layout.tsx` を使った共通 UI

など……

## セットアップ

### 必要な環境

- Node.js 20.9 以上
- pnpm / npm / yarn などのパッケージマネージャー

### インストール

```bash
# 依存パッケージのインストール
pnpm install
# または
npm install
# または
yarn install
```

### 開発サーバーの起動

```bash
pnpm dev
# または
npm run dev
# または
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。

## プロジェクト構造

```
my-blog-app/
├── app/                    # App Router のメインディレクトリ
│   ├── layout.tsx         # ルートレイアウト（共通ヘッダー）
│   ├── page.tsx           # トップページ
│   ├── about/             # About ページ
│   ├── blog/              # ブログ関連ページ
│   │   ├── page.tsx       # ブログトップ
│   │   ├── tech/          # 技術ブログ
│   │   ├── diary/         # 日記
│   │   └── reviews/       # 映画・音楽レビュー
│   ├── login/             # ログインページ
│   └── admin/             # 管理者ページ（認証保護）
├── app/components/        # 再利用可能なコンポーネント
│   ├── category-card.tsx
│   ├── back-button.tsx
│   └── blog-category-page.tsx
├── proxy.ts               # Proxy（旧 Middleware）設定
└── package.json
```

## 主な機能

### 1. ページルーティング

- `/` - トップページ
- `/about` - About ページ
- `/blog` - ブログカテゴリ一覧
- `/blog/tech` - 技術ブログ
- `/blog/diary` - 日記
- `/blog/reviews` - 映画・音楽レビュー

### 2. 画面遷移の実装例

- **`<Link>` コンポーネント**: 通常のリンク遷移
- **`useRouter` Hook**: プログラム制御による遷移
- **`redirect` / Proxy**: サーバーサイドでのリダイレクト

### 3. 認証ガード（Proxy）

`/admin` ページへのアクセスは、Proxy によって認証チェックが行われます。
未認証の場合は `/login` へリダイレクトされます。

## ビルドとデプロイ

### ビルド

```bash
pnpm build
# または
npm run build
# または
yarn build
```

### 本番環境での起動

```bash
pnpm start
# または
npm run start
# または
yarn start
```

### Vercel へのデプロイ

[Vercel Platform](https://vercel.com/new) を使用して簡単にデプロイできます。

## 参考資料

- [Next.js 公式ドキュメント](https://nextjs.org/docs)
- [Next.js 16 入門シリーズ](https://zenn.dev/virginia0314)

## ライセンス

このプロジェクトは学習目的で作成されています。

---

**ご意見やご提案がございましたら、ぜひ PR を送ってください。よろしくお願いします！**
