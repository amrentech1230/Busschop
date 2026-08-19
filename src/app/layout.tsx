import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Busschop Zwembaden | Premium Swimming Pools Belgium",
  description:
    "Busschop Zwembaden — specialist in custom swimming pool construction, renovation, and technology. Creating architectural aquatic experiences since establishment.",
  keywords:
    "swimming pool, zwembad, Belgium, Busschop, renovation, pool technology, premium pools",
  openGraph: {
    title: "Busschop Zwembaden | Premium Swimming Pools Belgium",
    description:
      "Specialist in custom swimming pool construction, renovation, and technology.",
    type: "website",
    locale: "nl_BE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
