import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";
import Head from 'next/head';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mulya Bazzar",
  description: "Empowering buyers, connecting markets in Nepal",
  keywords: "marketplace, Nepal, ecommerce, Mulya Bazzar, products, auctions",
  openGraph: {
    title: "Mulya Bazzar",
    description: "Empowering Buyers, Connecting Markets",
    url: "https://pristine-mind.github.io/mulya-bazzar/",
    siteName: "Mulya Bazzar",
    images: [
      {
        url: "/public/logo.png",
        width: 800,
        height: 600,
        alt: "Mulya Bazzar Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&family=Noto+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
