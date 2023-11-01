"use client";

import * as React from "react";
import clsx from "clsx";

import Logo from "@/components/Logo";
import LightDarkToggle from "@/components/LightDarkToggle";
import ProfileButton from "@/components/ProfileButton";
import { THEME_OPTIONS } from "@/types/theme";

import styles from "./Menu.module.css";

type MenuProps = {
  theme: THEME_OPTIONS;
};

function Menu({ theme }: MenuProps) {
  return (
    <aside className={clsx(styles.wrapper)}>
      <Logo />
      <div className={styles.actions}>
        <div className={styles.actionItem}>
          <LightDarkToggle initialTheme={theme} />
        </div>
        <div className={styles.actionItem}>
          <ProfileButton />
        </div>
      </div>
    </aside>
  );
}

export default Menu;
