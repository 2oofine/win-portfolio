import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata, Viewport } from "next";
import { Pixelify_Sans, Raleway } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  preload: true,
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  preload: true,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sherwin Portfolio | Web Developer",
  description:
    "Welcome to Sherwin's portfolio showcasing web development projects, design work, and professional experience.",
  keywords: "Sherwin, portfolio, web developer, frontend developer, UI/UX designer, React, Next.js, Tailwind CSS",
  authors: {
    name: "Sherwin Romero",
    url: "https://www.linkedin.com/in/sherwin-romero",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION} />
      </head>
      <body
        className={`${pixelifySans.variable} ${raleway.variable} antialiased bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange
          storageKey="portfolio-theme"
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 pt-24 md:pt-28">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
