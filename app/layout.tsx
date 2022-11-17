import './globals.css';

import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>todo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <main className="flex flex-col justify-center items-center w-screen h-screen bg-gray-400/50">
          <nav className="mt-4 order-last">
            <Link
              href={'/todo'}
              className="bg-white border  border-gray-400/80 rounded-lg py-2 px-3 text-gray-700"
            >
              시작하기
            </Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
