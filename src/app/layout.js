import "./globals.css";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import { ViewTransitions } from "next-view-transitions";

import { ReactLenis } from "lenis/react";

const jetBrainsMono = JetBrains_Mono({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage-serif",
});

export const metadata = {
  title: "Kaelon",
  description: "Portrait photographer",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${bricolageGrotesque.variable} ${jetBrainsMono.variable} antialiased`}
          suppressHydrationWarning
        >
          <ReactLenis root>
            <Navbar />
            {children}
          </ReactLenis>
        </body>
      </html>
    </ViewTransitions>
  );
}
