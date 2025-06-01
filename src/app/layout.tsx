import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata, Viewport } from "next";
import { Pixelify_Sans, Raleway } from "next/font/google";
import "./globals.css";

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
});

const raleway = Raleway({
  variable: "--font-raleway",
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
      <body
        className={`${pixelifySans.variable} ${raleway.variable} antialiased bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
          storageKey="portfolio-theme"
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
