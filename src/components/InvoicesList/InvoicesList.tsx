import * as React from "react";

import InvoiceItem from "@/components/InvoiceItem";

import styles from "./InvoicesList.module.css";

function InvoicesList({ invoices }) {
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
