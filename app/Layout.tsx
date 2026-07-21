import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PixelHub - Pixel Art e Assets Grátis",
  description: "Baixe sprites, tilesets e ícones de pixel art 100% grátis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
