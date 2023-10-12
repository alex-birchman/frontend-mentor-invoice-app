import styles from "./page.module.css";

import InvoicesHeader from "@/components/InvoicesHeader";
import InvoicesList from "@/components/InvoicesList";
import InvoicesNotFound from "@/components/InvoicesNotFound";

import data from "@/db/data.json";

export default function Home() {
    const invoices = data;

    return (
        <div className={styles.wrapper}>
            <InvoicesHeader invoiceNumber={invoices.length} />
            <div className={styles.content}>
                {invoices.length === 0 ? (
                    <InvoicesNotFound />
                ) : (
                    <InvoicesList invoices={invoices} />
                )}
            </div>
        </div>
    );
}
