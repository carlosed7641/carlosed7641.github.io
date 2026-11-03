import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Carlos Castro Reales | Software Engineer · AI",
  description:
    "Software Engineer especializado en frontend (Angular, React, Next.js) con más de 4 años de experiencia en medios de alto tráfico y e-commerce, enfocado en soluciones con IA: RAG y orquestación de agentes.",
  authors: [{ name: "Carlos Castro Reales" }],
  openGraph: {
    type: "website",
    locale: "es_CO",
    title: "Carlos Castro Reales | Software Engineer · AI",
    description:
      "Frontend para medios de alto tráfico y e-commerce, y productos con IA: RAG y orquestación de agentes.",
  },
};

export const viewport: Viewport = {
  themeColor: "#1b1815",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${hanken.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
