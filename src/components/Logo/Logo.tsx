import * as React from "react";
import Image from "next/image";

import styles from "./Logo.module.css";

function Logo() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.glare} />
            <Image
                className={styles.icon}
                src="/logo.svg"
                width={40}
                height={37}
                alt="Invoice App Logo"
            />
        </div>
    );
}

export default Logo;
