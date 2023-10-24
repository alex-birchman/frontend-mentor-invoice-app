"use client";

import { useSelector } from "react-redux";

import { AppState } from "@/store";
import { selectInvoiceById } from "@/store/invoices";
import InvoiceDetailBackButton from "@/components/InvoiceDetailBackButton";
import InvoiceDetailActions from "@/components/InvoiceDetailActions";
import InvoiceDetail from "@/components/InvoiceDetail";

import styles from "./page.module.css";

type InvoiceDetailProps = {
  params: {
    invoiceId: string;
  };
};

export default function InvoiceDetailPage({
  params: { invoiceId },
}: InvoiceDetailProps) {
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
        <InvoiceDetailActions invoiceId={invoiceId} />
      </div>
      <div className={styles.detail}>
        <InvoiceDetail invoice={invoice} />
      </div>
    </div>
  );
}
