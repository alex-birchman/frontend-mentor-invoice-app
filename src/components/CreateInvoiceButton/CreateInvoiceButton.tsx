"use client";

import * as React from "react";
import clsx from "clsx";
import { Plus } from "react-feather";

import styles from "./CreateInvoiceButton.module.css";
import globalStyles from "@/app/global.module.css";

function CreateInvoiceButton() {
  return (
    <button className={styles.wrapper} onClick={() => {}}>
      <div className={styles.iconWrapper}>
        <Plus
          size="1rem"
          strokeWidth={4}
          strokeLinecap="square"
          className={styles.icon}
        />
      </div>
      <span
        className={clsx(
          globalStyles.textSizeS,
          styles.title,
          styles.titleDesktop
        )}
      >
        New Invoice
      </span>
      <span
        className={clsx(
          globalStyles.textSizeS,
          styles.title,
          styles.titleMobile
        )}
      >
        New
      </span>
    </button>
  );
}

export default React.memo(CreateInvoiceButton);
