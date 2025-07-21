import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // ユーザーが送信した認証情報を取得
  const basicAuth = request.headers.get('authorization')
  const url = request.nextUrl

  if (basicAuth) {
    // 認証情報をデコードしてユーザー名・パスワードを取得
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    // 環境変数から正しい認証情報を取得
    // 本番環境ではVercelの環境変数で設定、ローカルでは.env.localから
    const validUser = process.env.BASIC_AUTH_USER || 'admin'
    const validPassword = process.env.BASIC_AUTH_PASSWORD || 'password123'

    // 入力された認証情報が正しいかチェック
    if (user === validUser && pwd === validPassword) {
      return NextResponse.next() // 認証成功：ページ表示を許可
    }
  }

  // 認証失敗：ブラウザに認証ダイアログを表示させる
  return new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}

// このmiddlewareを適用するページを指定
export const config = {
  matcher: [
    // 以下のパス以外のすべてのページに認証を適用
    // api: API関連のパス
    // _next/static: Next.jsの静的ファイル
    // _next/image: 画像最適化ファイル
    // favicon.ico: ファビコン
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
