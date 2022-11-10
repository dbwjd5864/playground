/* eslint-disable @next/next/no-head-element */

import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body><main>
        <nav>
        <Link href={'/'}>
          Home</Link>
          <Link href={'/notes'}>
          Note</Link></nav>
          {children}
          </main></body>
    </html>
  );
}
