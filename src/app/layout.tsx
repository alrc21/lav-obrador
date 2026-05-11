import type { Metadata, Viewport } from "next";
import { Fraunces, Geist } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lav-obrador.vercel.app"),
  title: "LAV Obrador · Pan y café de especialidad",
  description:
    "Obrador artesanal de pan de masa madre y café de especialidad. Próximamente.",
  openGraph: {
    type: "website",
    siteName: "LAV Obrador",
    title: "LAV Obrador · Pan y café de especialidad",
    description:
      "Obrador artesanal de pan de masa madre y café de especialidad.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "LAV Obrador",
    description: "Pan de masa madre y café de especialidad.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F1E8",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${fraunces.variable} ${geist.variable}`}>
        {children}
      </body>
    </html>
  );
}
