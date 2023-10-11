"use client";

import * as React from "react";
import Image from "next/image";
import { Sun, Moon } from "react-feather";

import styles from "./LightDarkToggle.module.css";

function LightDarkToggle({ initialTheme = "light" }) {
    const [theme, setTheme] = React.useState(initialTheme);

    function toggleTheme() {
        const nextTheme = theme === "light" ? "dark" : "light";

        setTheme(nextTheme);
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
