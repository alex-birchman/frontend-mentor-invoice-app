"use client";

import * as React from "react";
import clsx from "clsx";

import InvoicesFilter from "@/components/InvoicesFilter";
import CreateInvoiceButton from "@/components/CreateInvoiceButton";
import { useInvoices } from "@/components/InvoicesProvider";

import styles from "./InvoicesHeader.module.css";
import globalStyles from "@/app/global.module.css";

function InvoicesHeader() {
  const { invoices } = useInvoices();

  const invoicesCount = invoices.length;

  const descriptionDesktop =
    invoicesCount === 0
      ? "No invoices"
      : `There are ${invoicesCount} total invoices`;
  const descriptionMobile =
    invoicesCount === 0 ? "No invoices" : `${invoicesCount} total invoices`;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1 className={globalStyles.textSizeL}>Invoices</h1>
          <p
            className={clsx(
              globalStyles.textSizeBody,
              styles.description,
              styles.descriptionDesktop
            )}
          >
            {descriptionDesktop}
          </p>
          <p
            className={clsx(
              globalStyles.textSizeBody,
              styles.description,
              styles.descriptionMobile
            )}
          >
            {descriptionMobile}
          </p>
        </div>
        <div className={styles.actions}>
          <InvoicesFilter />
          <CreateInvoiceButton />
        </div>
      </div>
    </div>
  );
}

export default InvoicesHeader;
