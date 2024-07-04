import type { Metadata } from "next";
// import { Alegreya, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

// const inter = Alegreya({ weight: ["400","800"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "For humans",
  description: "Helping businesses improve themselves for free",
  icons: {
    icon: './favicon.ico',
    shortcut: './icon.ico',
    apple: './apple-touch-icon.png',
  },
  openGraph: {
    images: "https://utfs.io/f/8f37e732-f399-48d0-bd5d-2bbd61b2378b-a28uhi.jpg",
  }
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
            <script defer src="https://app.tinyanalytics.io/pixel/yxROWCwvXcVW2hfG"></script>
        </head>
        <body>{children}</body>
    </html>
  );
}
