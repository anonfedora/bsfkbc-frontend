import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Analytics } from "@vercel/analytics/react";
import { AuthProvider } from "@/context/auth-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Baptist Student Fellowship - Kaduna Baptist Conference",
  description:
    "Official website of the Baptist Student Fellowship, Kaduna Baptist Conference",
  icons: {
    icon: "/bsf-logo.png",
    apple: "/bsf-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col min-h-screen">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <Analytics />
              <SiteFooter />
            </div>
            ,
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
