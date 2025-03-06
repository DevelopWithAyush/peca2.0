import type { Metadata } from "next";
import "./globals.css";
import { HandleState } from "@/hooks/handleState";

export const metadata: Metadata = {
  title: "Peca",
  description: "Meme Coin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HandleState>
          {children}
        </HandleState>
      </body>
    </html>
  );
}
