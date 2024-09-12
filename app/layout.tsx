import type { Metadata } from "next";

import "./globals.css";
import { Noto_Sans_New_Tai_Lue } from "next/font/google";
import {BottomNavigationComponent, ContactUsButtonComponent, TopbarNavigationComponent } from "@/components";

const notoSansNewTaiLue = Noto_Sans_New_Tai_Lue({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "GoDad Clone | Domain Name, Hosting, Online & Email Marketing",
  description:
    "GoDad Clone is a sophisticated platform designed to streamline and enhance your web development workflow, offering a modern and efficient approach to managing your projects.",
  keywords:
    "GoDad Clone, web development, project management, modern web tools",
  icons: {
    icon: "/icons/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${notoSansNewTaiLue.className} flex flex-col min-h-screen`}
      >
        <TopbarNavigationComponent />
        <main className="flex-grow">
          {children}
        </main>
        <ContactUsButtonComponent />
        <BottomNavigationComponent/>
      </body>
    </html>
  );
}