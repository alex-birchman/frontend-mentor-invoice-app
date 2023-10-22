import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";

import Menu from "@/components/Menu";
import InvoicesProvider from "@/components/InvoicesProvider";

import "./styles.css";
import "./reset.css";
import "./custom-datepicker.css";

const mainFont = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invoice App",
  description: "A simple invoice app built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <InvoicesProvider>
      <html lang="en">
        <body className={mainFont.className}>
          <Menu />
          <main>{children}</main>
          <div id="sidebar-root" />
          <div id="calendar-root" />
        </body>
      </html>
    </InvoicesProvider>
  );
}
