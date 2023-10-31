import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";

import Menu from "@/components/Menu";
import Sidebar from "@/components/Sidebar";
import ScrollProvider from "@/components/ScrollProvider";
import Providers from "@/app/providers";

import "./styles.css";
import "./reset.css";
import "./custom-datepicker.css";

const mainFont = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invoice App",
  description: "A simple invoice app built with Next.js and TypeScript.",
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <ScrollProvider>
        <html lang="en">
          <body className={mainFont.className}>
            <Menu />
            <Sidebar />
            <main>{children}</main>
            <div id="sidebar-root" />
            <div id="calendar-root" />
            <div id="modal-root" />
          </body>
        </html>
      </ScrollProvider>
    </Providers>
  );
}
