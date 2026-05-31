import type { Metadata } from "next";
import "@fontsource/tajawal/400.css";
import "@fontsource/tajawal/500.css";
import "@fontsource/tajawal/700.css";
import "@fontsource/tajawal/800.css";
import { getProfile } from "@content/profile";
import { ClientRoot } from "@/components/site/client-root";
import "./globals.css";

const profile = getProfile("en");

export const metadata: Metadata = {
  title: `${profile.shortName} | Premium UI/UX & Next.js Portfolio`,
  description:
    "A cinematic portfolio for Ismaeel Hydar, a senior UI/UX designer and Team Lead Frontend Developer specialized in premium digital products and Next.js experiences.",
  openGraph: {
    title: `${profile.shortName} | Premium UI/UX & Next.js Portfolio`,
    description:
      "Cinematic product design, interactive frontend engineering, and premium digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
