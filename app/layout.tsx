import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "./components/header";
import Footer from "./components/footer";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Let's Hoop",
  description: "Find basketball courts near you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col items-center justify-center",
          fontSans.variable
        )}
      >
        <Header />
        <main className="w-full flex h-full flex-col items-center flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
