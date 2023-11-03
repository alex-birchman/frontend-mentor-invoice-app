import styles from "./page.module.css";

import InvoicesHeader from "@/components/Invoices/InvoicesHeader";
import InvoicesList from "@/components/Invoices/InvoicesList";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <InvoicesHeader />
      <div className={styles.content}>
        <InvoicesList />
      </div>
    </div>
  );
}
