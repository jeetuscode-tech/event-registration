import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Event Registration - Join Amazing Events",
  description: "Register for upcoming events with our seamless platform. Quick, secure, and easy event registration for conferences, workshops, and more.",
  keywords: "event registration, conference registration, workshop signup, event management, online registration",
  authors: [{ name: "Event Registration Team" }],
  creator: "Event Registration Platform",
  publisher: "Event Registration Platform",
  robots: "index, follow",
  openGraph: {
    title: "Event Registration - Join Amazing Events",
    description: "Register for upcoming events with our seamless platform. Quick, secure, and easy event registration.",
    type: "website",
    locale: "en_US",
    siteName: "Event Registration",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Registration - Join Amazing Events",
    description: "Register for upcoming events with our seamless platform.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#2563eb",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
