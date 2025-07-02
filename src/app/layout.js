import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shorty - URL Shortener",
  description:
    "Shorty is a simple and efficient URL shortener that allows you to create short links for your long URLs, making them easier to share and manage.",
  keywords:
    "URL shortener, link shortener, short links, share links, manage links",
  authors: [
    {
      name: "Prashant Maharjan",
    },
  ],
  creator: "Prashant Maharjan",
  openGraph: {
    title: "Shorty - URL Shortener",
    description:
      "Shorty is a simple and efficient URL shortener that allows you to create short links for your long URLs, making them easier to share and manage.",
    url: "https://shorty.maharjanp.com.np/",
    siteName: "Shorty",
    images: [
      {
        url: "https://shorty.maharjanp.com.np/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shorty URL Shortener",
      },
    ],
  },
  twitter: {
    card: "Shorty - URL Shortener",
    title: "Shorty - URL Shortener",
    description:
      "Shorty is a simple and efficient URL shortener that allows you to create short links for your long URLs, making them easier to share and manage.",
    images: ["https://shorty.maharjanp.com.np/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "https://shorty.maharjanp.com.np/",
    languages: {
      "en-US": "https://shorty.maharjanp.com.np/",
    },
  },
  formatDetection: {
    telephone: false, // Disable automatic detection of phone numbers
  },
  appleWebApp: {
    capable: true,
    title: "Shorty - URL Shortener",
    statusBarStyle: "default",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9810065319228675"
     crossorigin="anonymous"></script>
    </Head>
      <body
        className={`${manrope.variable} antialiased overflow-x-hidden w-full`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
