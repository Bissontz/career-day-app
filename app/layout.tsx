import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import HeaderBanner from "@/components/ui/HeaderBanner";

const inter = Inter({
  subsets: ["latin"], 
  variable: "--font-inter"
})

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: "--font-ibm-plex-serif"})

export const metadata: Metadata = {
  title: "Bissontz Career Day App",
  description: "This is a page that I created to showcase some information about computer science and coding to the elementary students at Mars Area Elementary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`}
      >
        <HeaderBanner/>
        <br/>
        <br/>
        {children}
      </body>
    </html>
  );
}
