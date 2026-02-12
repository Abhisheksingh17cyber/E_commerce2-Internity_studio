import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ATELIER | Premium Contemporary Fashion",
  description:
    "Discover timeless elegance through sustainable luxury fashion. Curated collections crafted with intention for the modern wardrobe.",
  keywords: [
    "luxury fashion",
    "sustainable clothing",
    "contemporary style",
    "premium apparel",
    "designer clothing",
  ],
  authors: [{ name: "ATELIER" }],
  creator: "ATELIER",
  publisher: "ATELIER",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://atelier.com",
    siteName: "ATELIER",
    title: "ATELIER | Premium Contemporary Fashion",
    description:
      "Discover timeless elegance through sustainable luxury fashion.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ATELIER - Premium Contemporary Fashion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATELIER | Premium Contemporary Fashion",
    description:
      "Discover timeless elegance through sustainable luxury fashion.",
    images: ["/og-image.jpg"],
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
};

export const viewport: Viewport = {
  themeColor: "#1c1917",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
