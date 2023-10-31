"use client";

import * as React from "react";
import clsx from "clsx";

import Logo from "@/components/Logo";
import LightDarkToggle from "@/components/LightDarkToggle";
import ProfileButton from "@/components/ProfileButton";

import styles from "./Menu.module.css";

function Menu() {
  return (
    <aside className={clsx(styles.wrapper)}>
      <Logo />
      <div className={styles.actions}>
        <div className={styles.actionItem}>
          <LightDarkToggle initialTheme="light" />
        </div>
        <div className={styles.actionItem}>
          <ProfileButton />
        </div>
      </div>
    </aside>
  );
}

export default Menu;
