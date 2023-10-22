import styles from "./page.module.css";

import InvoicesHeader from "@/components/InvoicesHeader";
import InvoicesList from "@/components/InvoicesList";

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
