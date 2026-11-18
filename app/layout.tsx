import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://my-brain.vercel.app'),
  title: {
    default: 'My Brain · 赛博外脑知识库',
    template: '%s | My Brain',
  },
  description: '第二大脑 · 深度知识库 · 思考星图 · 现代工程实践',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="zh-CN" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-[#070709] text-neutral-100">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
