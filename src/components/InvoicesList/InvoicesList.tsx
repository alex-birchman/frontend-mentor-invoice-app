"use client";

import * as React from "react";

import InvoiceItem from "@/components/InvoiceItem";
import InvoicesNotFound from "@/components/InvoicesNotFound";
import { useInvoices } from "@/components/InvoicesProvider";

import styles from "./InvoicesList.module.css";

function InvoicesList() {
    const { invoices } = useInvoices();

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
