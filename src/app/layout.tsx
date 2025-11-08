import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/contexts/theme-context";
import { Analytics } from "@vercel/analytics/react";

        export const metadata: Metadata = {
          title: "Ed | log",
          description: "Minimal dev log showcasing my work and thoughts",
          icons: {
            icon: "/favicon.svg",
          },
          viewport: {
            width: 'device-width',
            initialScale: 1,
            maximumScale: 1,
            userScalable: false,
          },
        };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased flex flex-col min-h-screen">
        <ThemeProvider>
          <Navigation />
          <main className="pt-20 flex-1 [.blog-post-page_&]:pt-0">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
