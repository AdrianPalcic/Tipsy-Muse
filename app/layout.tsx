import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://tipsymuse.hr"),
  title: {
    default: "Tipsy Muse | Wine & Paint Studio Zagreb",
    template: "%s | Tipsy Muse",
  },
  description:
    "Tipsy Muse je wine & paint studio u Zagrebu gdje spajamo umjetnost, vino i zabavu. Rezervirajte radionice slikanja uz čašu vina, koktele ili prosecca. Savršeno za druženje, team building i kreativno izražavanje u opuštenoj atmosferi.",
  keywords: [
    "wine and paint",
    "wine & paint",
    "wine and paint studio",
    "wine paint studio zagreb",
    "wine paint zagreb",
    "slikanje uz vino zagreb",
    "radionice slikanja zagreb",
    "wine art zagreb",
    "paint and sip zagreb",
    "kreativne radionice zagreb",
    "wine & paint radionice",
    "team building zagreb",
    "druženje uz slikanje",
    "wine tasting zagreb",
    "umjetničke radionice zagreb",
    "tipsy muse",
    "tipsy muse zagreb",
    "maksimirska zagreb",
  ],
  authors: [{ name: "Tipsy Muse" }],
  creator: "Tipsy Muse",
  publisher: "Tipsy Muse",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/png" },
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
  openGraph: {
    type: "website",
    locale: "hr_HR",
    url: "https://tipsymuse.hr",
    siteName: "Tipsy Muse",
    title: "Tipsy Muse | Wine & Paint Studio Zagreb",
    description:
      "Wine & paint studio u Zagrebu gdje spajamo umjetnost, vino i zabavu. Rezervirajte radionice slikanja uz čašu vina u opuštenoj atmosferi.",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "Tipsy Muse Wine & Paint Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tipsy Muse | Wine & Paint Studio Zagreb",
    description:
      "Wine & paint studio u Zagrebu gdje spajamo umjetnost, vino i zabavu.",
    images: ["/Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://tipsymuse.hr",
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
    <html lang="hr" className={`${luckiestGuy.variable} ${baloo.variable}`}>
      <body suppressHydrationWarning className={`antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
