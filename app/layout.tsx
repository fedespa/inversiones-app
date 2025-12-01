import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu/Menu";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
import Providers from "@/components/ui/Providers";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  keywords: [
    "inversión",
    "educación financiera",
    "ahorros",
    "interés compuesto",
    "fondos indexados",
    "invertir en 2025",
    "finanzas personales",
    "grandes inversores"
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Federico Spagnolo" }],
  creator: "Federico Spagnolo",
  category: "finance",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased overflow-x-hidden h-dvh text-black dark:text-white bg-[#F8FAFC] dark:bg-[#101828] transition duration-200`}
      >
        <Providers>
          <Menu />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
