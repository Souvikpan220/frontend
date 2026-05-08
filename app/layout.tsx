import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atelier Vale | Bespoke Suit Tailoring",
  description: "A premium bespoke tailoring storefront for custom suits, tuxedos, and modern menswear."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
