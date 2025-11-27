/**
 * ログインページコンポーネント
 *
 * 管理者ページへのアクセス時に、Proxy（旧 Middleware）によって
 * 未認証ユーザーがリダイレクトされる先のページです。
 *
 * 実際のアプリでは、ここにログインフォームを実装します。
 *
 * @returns {JSX.Element} ログインページの JSX 要素
 */
export default function LoginPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">ログイン</h1>
      <p>管理者ページにアクセスするにはログインが必要です。</p>
      {/* 簡易的な表示のみ */}
    </div>
  );
}
