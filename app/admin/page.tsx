/**
 * 管理者ページコンポーネント
 *
 * 認証が必要な保護されたページの例です。
 * Proxy（旧 Middleware）によって、未認証ユーザーは
 * 自動的に /login ページへリダイレクトされます。
 *
 * @returns {JSX.Element} 管理者ページの JSX 要素
 */
export default function AdminPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4 text-red-600">管理者ページ</h1>
      <p>管理者ページにアクセスしました。</p>
      <p>このページはログイン済みユーザーのみ閲覧可能です。</p>
    </div>
  );
}
