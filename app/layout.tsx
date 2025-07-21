
import type { Metadata } from "next";
import { Noto_Sans_JP, Pacifico } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
});

export const metadata: Metadata = {
  title: "ITソリューション・ラボ",
  description: "ITソリューション・ラボのHPイメージ",
  // 検索エンジン対策を追加
  robots: {
    index: false,        // noindex: 検索結果に表示しない
    follow: false,       // nofollow: リンクを辿らない
    noarchive: true,     // キャッシュ版を保存しない
    nosnippet: true,     // 検索結果にスニペットを表示しない
    noimageindex: true,  // 画像をインデックスしない
    nocache: true,       // キャッシュしない
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning={true}>
      <body
        className={`${notoSansJP.variable} ${pacifico.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
