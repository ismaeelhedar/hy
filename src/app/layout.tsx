import type { Metadata } from "next";
import "@fontsource/tajawal/400.css";
import "@fontsource/tajawal/500.css";
import "@fontsource/tajawal/700.css";
import "@fontsource/tajawal/800.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "عيد الأضحى المبارك | المهندس إسماعيل عبد الرحمن حيدر",
  description:
    "صفحة معايدة خاصة بعيد الأضحى المبارك للمصمم المهندس إسماعيل عبد الرحمن حيدر.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
