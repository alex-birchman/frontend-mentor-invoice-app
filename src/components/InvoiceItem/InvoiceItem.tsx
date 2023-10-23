"use client";

import * as React from "react";
import clsx from "clsx";
import { DateTime } from "luxon";
import { useRouter } from "next/navigation";
import { ChevronRight } from "react-feather";

import InvoiceStatus from "@/components/InvoiceStatus";
import { Invoice } from "@/types/invoice";

import styles from "./InvoiceItem.module.css";
import globalStyles from "@/app/global.module.css";

type InvoiceItemProps = Pick<
  Invoice,
  "id" | "paymentDue" | "clientName" | "total" | "status"
>;

function InvoiceItem({
  id,
  paymentDue,
  clientName,
  total,
  status,
}: InvoiceItemProps) {
  const router = useRouter();

  const formattedTotal = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(total);

  const humanizedPaymentDue =
    DateTime.fromJSDate(paymentDue).toFormat("dd MMM yyyy");

  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        router.push(`/invoice/${id}`);
      }}
    >
      <div className={styles.content}>
        <div className={styles.id}>
          <span className={styles.idHashTag}>#</span>
          <span className={clsx(globalStyles.textSizeS, styles.idNumber)}>
            {id}
          </span>
        </div>
        <span className={styles.paymentDue}>{humanizedPaymentDue}</span>
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
