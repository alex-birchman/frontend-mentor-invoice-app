"use client";

import * as React from "react";
import { useSelector } from "react-redux";

import { AppState } from "@/store";
import { selectInvoiceById } from "@/store/invoices";
import InvoiceDetailBackButton from "@/components/Invoices/InvoiceDetailBackButton";
import InvoiceDetailActions from "@/components/Invoices/InvoiceDetailActions";
import InvoiceDetail from "@/components/Invoices/InvoiceDetail";

import styles from "./page.module.css";

type InvoiceDetailProps = {
  params: {
    invoiceId: string;
  };
};

export default function InvoiceDetailPage({
  params: { invoiceId },
}: InvoiceDetailProps) {
  const thresholdRef = React.useRef<HTMLDivElement>(null);
  const invoice = useSelector((state: AppState) =>
    selectInvoiceById(state, invoiceId)
  );

  if (!invoice) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <InvoiceDetailBackButton />
      <div className={styles.actions}>
        <InvoiceDetailActions ref={thresholdRef} invoiceId={invoiceId} />
      </div>
      <div className={styles.detail}>
        <InvoiceDetail invoice={invoice} />
      </div>
      <div ref={thresholdRef} />
    </div>
  );
}
