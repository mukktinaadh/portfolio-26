import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mukktinaadh Raghavarapu — AI / Agent Engineer",
  description:
    "AI engineer who ships production agents, not demos. RAG, voice, and inference systems that run in production.",
  keywords: [
    "AI Engineer",
    "Agent Engineer",
    "LLM",
    "RAG",
    "Voice Agent",
    "NeurIPS",
    "Portfolio",
  ],
  openGraph: {
    title: "Mukktinaadh Raghavarapu — AI / Agent Engineer",
    description: "I build AI systems that take real action — not chatbots that just talk.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
