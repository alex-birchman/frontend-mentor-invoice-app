import { CSSProperties } from "react";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { League_Spartan } from "next/font/google";

import Menu from "@/components/Menu";
import Sidebar from "@/components/Sidebar";
import ScrollProvider from "@/components/ScrollProvider";
import Providers from "@/app/providers";
import { THEME_OPTIONS } from "@/types/theme";
import { LIGHT_TOKENS, DARK_TOKENS } from "@/const/theme";

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
  const savedTheme = cookies().get("color-theme");
  const theme = (savedTheme?.value || "light") as THEME_OPTIONS;
  const themeColor = (
    theme === "light" ? LIGHT_TOKENS : DARK_TOKENS
  ) as CSSProperties;

  return (
    <ScrollProvider>
      <html lang="en" className={mainFont.className} style={themeColor}>
        <body>
          <Providers>
            <Menu theme={theme} />
            <Sidebar />
            <main>{children}</main>
            <div id="sidebar-root" />
            <div id="calendar-root" />
            <div id="modal-root" />
          </Providers>
        </body>
      </html>
    </ScrollProvider>
  );
}
