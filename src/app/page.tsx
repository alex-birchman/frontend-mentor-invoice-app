import styles from "./page.module.css";

import InvoicesHeader from "@/components/InvoicesHeader";

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <InvoicesHeader />
        </div>
    );
}
