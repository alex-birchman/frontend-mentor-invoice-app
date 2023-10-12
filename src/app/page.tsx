import styles from "./page.module.css";

import InvoicesHeader from "@/components/InvoicesHeader";
import InvoicesList from "@/components/InvoicesList";
import InvoicesNotFound from "@/components/InvoicesNotFound";

export default function Home() {
    const invoices = [];

    return (
        <div className={styles.wrapper}>
            <InvoicesHeader invoiceNumber={invoices.length} />
            <div className={styles.content}>
                {invoices.length === 0 ? (
                    <InvoicesNotFound />
                ) : (
                    <InvoicesList data={[]} />
                )}
            </div>
        </div>
    );
}
