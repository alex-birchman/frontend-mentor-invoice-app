"use client";

import * as React from "react";
import { Sun, Moon } from "react-feather";
import Cookie from "js-cookie";

import { LIGHT_COLORS, DARK_COLORS } from "@/const/theme";

import styles from "./LightDarkToggle.module.css";

function LightDarkToggle({ initialTheme = "light" }) {
  const [theme, setTheme] = React.useState(initialTheme);

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);

    Cookie.set("color-theme", nextTheme, {
      expires: 1000,
    });

    const root = document.documentElement;
    const colors = nextTheme === "light" ? LIGHT_COLORS : DARK_COLORS;

    root.setAttribute("data-color-theme", nextTheme);
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  return (
    <button className={styles.action} onClick={toggleTheme}>
      {theme === "light" ? (
        <Moon size="1.5rem" strokeWidth={0.5} className={styles.icon} />
      ) : (
        <Sun size="1.5rem" className={styles.icon} />
      )}
    </button>
  );
}

export default LightDarkToggle;
