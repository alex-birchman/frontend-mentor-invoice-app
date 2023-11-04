import * as React from "react";
import clsx from "clsx";
import Image from "next/image";

import styles from "./InvoicesNotFound.module.css";
import globalStyles from "@/app/global.module.css";

function InvoicesNotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Image
          src="/invoices-empty.svg"
          width={242}
          height={200}
          alt="Girl with megaphone"
        />
        <h2 className={clsx(globalStyles.textSizeM, styles.title)}>
          There is nothing here
        </h2>
        <p
          className={clsx(
            globalStyles.textSizeBody,
            styles.description,
            styles.descriptionDesktop
          )}
        >
          Create an invoice by clicking the <b>New Invoice</b> button and get
          started
        </p>
        <p
          className={clsx(
            globalStyles.textSizeBody,
            styles.description,
            styles.descriptionMobile
          )}
        >
          Create an invoice by clicking the <b>New</b> button and get started
        </p>
      </div>
    </div>
  );
}

export default InvoicesNotFound;
