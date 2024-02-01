import "./globals.css";
import type { Metadata } from "next";
import { Inter, Abel, Lato } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
// const abel = Abel({ subsets: ["latin"], weight: "400" });
// const lato = Lato({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Movies App",
  description: "Find a movie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
