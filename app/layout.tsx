import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Tipsy Muse | Wine & Paint",
  description: "Wine & Paint",
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
        {children}
      </body>
    </html>
  );
}
