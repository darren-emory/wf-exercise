import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Winston Francois - All Blog Posts`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
