import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PETE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </head>
      <body className="relative min-h-screen overflow-x-hidden bg-white font-mono text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
