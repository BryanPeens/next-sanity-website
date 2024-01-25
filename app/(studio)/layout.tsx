import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "My Awesome Site",
  description: "Generated by Next & Sanity.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
