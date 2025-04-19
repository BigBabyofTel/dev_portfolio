import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";



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
      <body suppressHydrationWarning>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
