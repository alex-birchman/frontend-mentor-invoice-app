"use client";

import * as React from "react";
import clsx from "clsx";

import InvoiceStatus from "@/components/InvoiceStatus";
import Button from "@/components/Button";

import styles from "./InvoiceDetailActions.module.css";
import globalStyles from "@/app/global.module.css";

type InvoiceDetailActionsProps = {
  invoiceId: string;
};

function InvoiceDetailActions({ invoiceId }: InvoiceDetailActionsProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.status}>
        <div className={clsx(globalStyles.textSizeBody, styles.statusLabel)}>
          Status
        </div>
        <InvoiceStatus status="pending" />
      </div>
      <div className={styles.actions}>
        <Button styleType="tertiary">Edit</Button>
        <Button styleType="danger">Delete</Button>
        <Button styleType="primary">Mark as Paid</Button>
      </div>
    </div>
  );
}

export default InvoiceDetailActions;
