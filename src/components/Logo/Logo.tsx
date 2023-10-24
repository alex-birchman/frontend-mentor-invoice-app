import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link className={styles.wrapper} href={"/"}>
      <div className={styles.glare} />
      <Image
        className={styles.icon}
        src="/logo.svg"
        width={40}
        height={37}
        alt="Invoice App Logo"
      />
    </Link>
  );
}

export default Logo;
