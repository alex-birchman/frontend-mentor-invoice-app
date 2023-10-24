"use client";

import * as React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";

import InvoicesFilter from "@/components/InvoicesFilter";
import CreateInvoiceButton from "@/components/CreateInvoiceButton";

import styles from "./InvoicesHeader.module.css";
import globalStyles from "@/app/global.module.css";
import { selectTotalInvoices } from "@/store/invoices";

function InvoicesHeader() {
  const totatlInvoices = useSelector(selectTotalInvoices);

  const descriptionDesktop =
    totatlInvoices === 0
      ? "No invoices"
      : `There are ${totatlInvoices} total invoices`;
  const descriptionMobile =
    totatlInvoices === 0 ? "No invoices" : `${totatlInvoices} total invoices`;

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
