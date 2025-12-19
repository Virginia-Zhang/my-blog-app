# Next.js 16 ブログデモプロジェクト（Blog Demo Project）

このプロジェクトは、私が執筆している Next.js 16 入門シリーズのチュートリアル用に作成されたブログサイトのデモです。
Bun エコシステムを全面的に採用し、最新の Next.js 機能と堅牢なエンジニアリングプラクティスを学ぶことができます。

Next.js 16 入門シリーズのチュートリアルブログはこちら：[https://zenn.dev/virginia0314]

オリジナルです。無断転載禁止。

## プロジェクトの概要

このデモプロジェクトでは、以下の Next.js の主要機能と開発プラクティスを実装しています：

- **Next.js 16 & App Router**: 最新のファイルシステムベースのルーティング
- **Bun Ecosystem**: 高速なランタイム、パッケージ管理、およびテスト実行
- **Server/Client Components**: サーバーサイドとクライアントサイドの最適な使い分け
- **Dynamic Routing**: `[slug]` を使用した動的な記事詳細ページの生成
- **Interactive UI**: `localStorage` を活用した永続的な「いいね」ボタン
- **Quality Assurance**: `bun test` と GitHub Actions による自動化テストと CI
- **Bilingual Documentation**: EN + JA の双 JSDoc 形式によるコードコメント

など……

## 技術スタック

- **Framework**: Next.js 16 (App Router)
- **Runtime & Package Manager**: [Bun](https://bun.sh/) v1.3.4+
- **Styling**: Tailwind CSS v4
- **Testing**: Bun Test, React Testing Library, Happy DOM
- **Language**: TypeScript 5

## セットアップ

### 必要な環境

- **Bun** v1.3.4 以上

### インストール

```bash
# 依存パッケージのインストール
bun install
```

### 開発サーバーの起動

```bash
# 開発サーバーの起動 (内部で bun --bun next dev を実行)
bun dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。

## プロジェクト構造

```
my-blog-app/
├── .github/workflows/           # CI/CD (GitHub Actions) 設定
│   └── ci.yml                   # Lint, Test, Build 自動実行ワークフロー
├── .cursor/rules/               # AI 補助開発ルール (JSDoc 規約など)
├── app/                         # App Router メインディレクトリ
│   ├── about/                   # About ページ
│   ├── admin/                   # 管理者ページ (認証保護)
│   ├── blog/                    # ブログ関連ページ
│   │   ├── diary/               # 日記カテゴリ
│   │   ├── reviews/             # レビューカテゴリ
│   │   ├── tech/                # 技術ブログカテゴリ
│   │   │   └── [slug]/          # 記事詳細 (動的ルーティング)
│   │   └── page.tsx             # ブログトップ
│   ├── components/              # 再利用可能なコンポーネント
│   │   ├── icons/               # SVG アイコン
│   │   │   └── github-icon.tsx
│   │   ├── article-card.tsx     # 記事カード
│   │   ├── like-button.tsx      # いいねボタン (LocalStorage 連携)
│   │   ├── back-button.tsx      # 戻るボタン
│   │   ├── category-card.tsx    # カテゴリカード
│   │   └── blog-category-page.tsx # カテゴリ共通レイアウト
│   ├── data/                    # データ層
│   │   └── posts-data.ts        # 記事のモックデータ
│   ├── lib/                     # ロジック・ユーティリティ
│   │   └── posts.ts             # 記事取得ロジック
│   ├── layout.tsx               # ルートレイアウト
│   └── page.tsx                 # トップページ
├── tests/                       # テストスイート
│   ├── components/              # コンポーネントテスト
│   │   └── like-button.test.tsx
│   ├── unit/                    # ユニットテスト (ロジック)
│   │   └── lib/
│   │       └── posts.test.ts
│   └── setup.ts                 # テスト環境セットアップ (Happy DOM)
├── bunfig.toml                  # Bun 設定ファイル
├── proxy.ts                    # Proxy (旧 Middleware) 設定
└── package.json
```

## 主な機能

### 1. ページルーティング & 動的データ

- `/blog/tech/[slug]` - Markdown 形式のような動的な記事詳細レンダリング。
- `app/lib/posts.ts` を通じた非同期的なデータ取得シミュレーション。

### 2. インタラクティブ・コンポーネント

- **LikeButton**: クライアントサイドでのステート管理に加え、`localStorage` を使用してリロード後も状態を保持します。

### 3. 認証ガード (Proxy)

- `/admin` ページへのアクセスは、`proxy.ts` によって認証チェックが行われ、未認証の場合は `/login` へリダイレクトされます。

### 4. 品質管理 (QA)

- **Automated Testing**: `bun test` を使用した高速なテスト実行。
- **CI Pipeline**: GitHub Actions により、Push/PR 時に自動的に Lint、Test、Build が実行されます。

## コマンド一覧

| コマンド             | 内容                         |
| :------------------- | :--------------------------- |
| `bun dev`            | 開発サーバーの起動           |
| `bun run test`       | 全テストの実行               |
| `bun run test:watch` | ウォッチモードでのテスト実行 |
| `bun run lint`       | ESLint によるコードチェック  |
| `bun run build`      | 本番用ビルドの作成           |
| `bun run start`      | 本番サーバーの起動           |

## ライセンス

このプロジェクトは学習目的で作成されています。

---

**もし改善点やアイデアなどがございましたら、Issues にてご投稿いただければ助かります。よろしくお願いします！**
