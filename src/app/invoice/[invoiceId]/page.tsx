import InvoiceDetailBackButton from "@/components/InvoiceDetailBackButton";
import InvoiceDetailActions from "@/components/InvoiceDetailActions";

import styles from "./page.module.css";

type InvoiceDetailProps = {
  params: {
    invoiceId: string;
  };
};

export default function InvoiceDetail({
  params: { invoiceId },
}: InvoiceDetailProps) {
  return (
    <div className={styles.wrapper}>
      <InvoiceDetailBackButton />
      <InvoiceDetailActions invoiceId={invoiceId} />
      <h1>Invoice Page - {invoiceId}</h1>
    </div>
  );
}
