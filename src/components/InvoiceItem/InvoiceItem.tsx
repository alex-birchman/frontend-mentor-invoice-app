import * as React from "react";
import clsx from "clsx";
import { ChevronRight } from "react-feather";

import InvoiceStatus from "@/components/InvoiceStatus";
import { InvoiceStatusType } from "@/types/invoice";

import styles from "./InvoiceItem.module.css";
import globalStyles from "@/app/global.module.css";

type InvoiceItemProps = {
  id: string;
  paymentDue: string;
  clientName: string;
  total: number;
  status: InvoiceStatusType;
};

function InvoiceItem({
  id,
  paymentDue,
  clientName,
  total,
  status,
}: InvoiceItemProps) {
  const formattedTotal = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(total);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.id}>
          <span className={styles.idHashTag}>#</span>
          <span className={clsx(globalStyles.textSizeS, styles.idNumber)}>
            {id}
          </span>
        </div>
        <span className={styles.paymentDue}>{paymentDue}</span>
        <span className={styles.clientName}>{clientName}</span>
        <span className={clsx(globalStyles.textSizeS, styles.totalSum)}>
          {formattedTotal}
        </span>
        <InvoiceStatus status={status} className={styles.status} />
        <ChevronRight
          size="1rem"
          strokeWidth={2}
          strokeLinecap="square"
          className={styles.arrowIcon}
        />
      </div>
    </div>
  );
}

export default InvoiceItem;
