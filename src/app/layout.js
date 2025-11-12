import "./globals.css";

export const metadata = {
  title: "Jeff Lane",
  description: "Composer, Songwriter, Author and Musician.  Welcome!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png"></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
