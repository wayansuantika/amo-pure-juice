import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amopurejuice.com"),
  title: {
    default: "AMO Pure Juice | 0.0% Alcohol Grape Juice",
    template: "%s | AMO Pure Juice",
  },
  description:
    "AMO Pure Juice is a premium 0.0% alcohol grape juice with a refined sparkling profile, crafted for modern conscious living.",
  keywords: [
    "AMO Pure Juice",
    "grape juice",
    "non-alcoholic sparkling juice",
    "0.0% alcohol",
    "premium juice",
    "go green beverage",
  ],
  openGraph: {
    title: "AMO Pure Juice | 0.0% Alcohol Grape Juice",
    description:
      "Premium non-alcoholic grape juice with elegant taste notes and a go-green philosophy.",
    type: "website",
    locale: "en_US",
    url: "https://www.amopurejuice.com",
    siteName: "AMO Pure Juice",
  },
  twitter: {
    card: "summary_large_image",
    title: "AMO Pure Juice | 0.0% Alcohol Grape Juice",
    description:
      "Premium non-alcoholic grape juice with elegant taste notes and a go-green philosophy.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
