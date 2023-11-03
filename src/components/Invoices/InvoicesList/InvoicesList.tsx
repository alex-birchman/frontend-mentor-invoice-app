"use client";

import * as React from "react";
import { useSelector } from "react-redux";

import InvoiceItem from "@/components/Invoices/InvoiceItem";
import InvoicesNotFound from "@/components/Invoices/InvoicesNotFound";
import { selectInvoicesByFilters } from "@/store/invoices";

import styles from "./InvoicesList.module.css";

function InvoicesList() {
  const invoices = useSelector(selectInvoicesByFilters);

  if (invoices.length === 0) {
    return <InvoicesNotFound />;
  }

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            <InvoiceItem {...invoice} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InvoicesList;
