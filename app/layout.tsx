import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (process.env.NODE_ENV === 'development') {
    require('../mocks');
  }

  return (
    <html>
      <head>
        <title>todo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <main className="flex flex-col justify-center items-center w-screen h-screen bg-gray-400/50">
          {children}
        </main>
      </body>
    </html>
  );
}
