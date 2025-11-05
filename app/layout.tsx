import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Tipsy Muse | Wine & Paint",
  description: "Wine & Paint",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  themeColor: "#ffffff",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Tipsy Muse",
  },
};

const luckiestGuy = localFont({
  src: [
    {
      path: "./fonts/LuckiestGuy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-luckiest-guy",
  display: "swap",
});

const baloo = localFont({
  src: [
    {
      path: "./fonts/Baloo2-Bold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Baloo2-ExtraBold.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Baloo2-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Baloo2-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Baloo2-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-baloo",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${luckiestGuy.variable} ${baloo.variable}`}>
      <body suppressHydrationWarning className={`antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
