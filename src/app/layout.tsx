import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Елисавета Наговицына | Стратег по развитию цифровых продуктов",
  description: "Помогаю экспертам в Telegram создавать комплексные маркетинговые экосистемы, которые превращают их в лидеров ниши.",
  keywords: ["Telegram маркетинг", "контент-стратегия", "экспертная упаковка", "Telegram боты", "лидогенерация"],
  authors: [{ name: "Елисавета Наговицына" }],
  creator: "Елисавета Наговицына",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://elisaffetta.ru",
    title: "Елисавета Наговицына | Стратег по развитию цифровых продуктов",
    description: "Помогаю экспертам в Telegram создавать комплексные маркетинговые экосистемы, которые превращают их в лидеров ниши.",
    siteName: "Елисавета Наговицына",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
