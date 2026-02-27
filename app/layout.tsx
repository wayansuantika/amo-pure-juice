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
    default: "AMO Pure Juice | Premium 0.0% Alcohol Grape Juice",
    template: "%s | AMO Pure Juice",
  },
  description:
    "AMO Pure Juice is a premium 0.0% alcohol grape juice with moscato character, elegant aroma notes, and direct WhatsApp ordering.",
  keywords: [
    "AMO Pure Juice",
    "grape juice",
    "non-alcoholic sparkling juice",
    "0.0% alcohol",
    "premium juice",
    "go green beverage",
    "halal juice",
    "BPOM certified",
    "Moscato grape juice",
  ],
  openGraph: {
    title: "AMO Pure Juice | Premium 0.0% Alcohol Grape Juice",
    description:
      "Premium non-alcoholic grape juice with elegant aroma notes and modern celebration character.",
    type: "website",
    locale: "en_US",
    url: "https://www.amopurejuice.com",
    siteName: "AMO Pure Juice",
    images: [
      {
        url: "/Amo-Bottle-Halal.png",
        width: 760,
        height: 1200,
        alt: "AMO Pure Juice premium 0.0% alcohol grape juice bottle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AMO Pure Juice | Premium 0.0% Alcohol Grape Juice",
    description:
      "Premium non-alcoholic grape juice with elegant aroma notes and modern celebration character.",
    images: ["/Amo-Bottle-Halal.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
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
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
