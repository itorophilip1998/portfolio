import type { Metadata } from "next"; 
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import Header from "@/layouts/Header";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-JetBrainsMono",
});

export const metadata: Metadata = {
  title: "Philip`s Portfolio",
  description: "Philip`s Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={JetBrainsMono.variable}>
        <Header/>
        {children}</body>
    </html>
  );
}
