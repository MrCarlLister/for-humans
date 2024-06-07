import type { Metadata } from "next";
// import { Alegreya, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

// const inter = Alegreya({ weight: ["400","800"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "For humans",
  description: "Helping businesses improve themselves for free",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Inter:wght@100..900&display=swap" rel="stylesheet"></link>
        </head>
        <body>{children}</body>
    </html>
  );
}
