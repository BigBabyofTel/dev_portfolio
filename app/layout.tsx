import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A Dev Portfolio",
  description: "The Offical DevPort for T. Augustus Baker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
