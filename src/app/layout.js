import "./globals.css";

export const metadata = {
  title: "JeffLane.Rocks",
  description: "Composer, Songwriter, Author and Musician.  Welcome!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
