/**
 * Proxy（旧 Middleware）設定ファイル
 *
 * Next.js 16 から、Middleware は Proxy と呼ばれるようになりました。
 * リクエストがページに到達する前に実行され、
 * 認証チェックやリダイレクトなどの処理を行います。
 *
 * このファイルでは、/admin パスへのアクセス時に
 * 認証トークンがない場合、/login へリダイレクトする処理を実装しています。
 *
 * @param {NextRequest} request - リクエストオブジェクト
 * @returns {NextResponse | void} リダイレクトレスポンス、または次の処理へ
 */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  // /admin にアクセスしようとしていて、クッキーに認証情報がない場合
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // 実際のアプリではここで適切なトークン検証を行います
    const isAuth = request.cookies.get("auth_token");

    if (!isAuth) {
      // ログイン画面へ強制リダイレクト
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

// マッチするパスの設定（任意）
export const config = {
  matcher: "/admin/:path*",
};
