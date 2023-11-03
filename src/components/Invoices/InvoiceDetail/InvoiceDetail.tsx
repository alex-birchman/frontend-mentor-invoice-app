import * as React from "react";
import clsx from "clsx";
import { DateTime } from "luxon";

import { Invoice } from "@/types/invoice";
import InvoiceDetailItems from "@/components/Invoices/InvoiceDetailItems";

import styles from "./InvoiceDetail.module.css";
import globalStyles from "@/app/global.module.css";

type InvoiceDetailProps = {
  invoice: Invoice;
};

function InvoiceDetail({ invoice }: InvoiceDetailProps) {
  const humanizedCreatedDate = DateTime.fromJSDate(
    new Date(invoice.createdAt)
  ).toFormat("dd MMM yyyy");

  const humanizedPaymentDueDate = DateTime.fromJSDate(
    new Date(invoice.paymentDue)
  ).toFormat("dd MMM yyyy");

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.idDescriptionAndSenderAddress}>
          <div className={styles.idDescription}>
            <div className={styles.id}>
              <span className={styles.idHashTag}>#</span>
              <span className={clsx(globalStyles.textSizeS, styles.idNumber)}>
                {invoice.id}
              </span>
            </div>
            <div
              className={clsx(globalStyles.textSizeBody, styles.description)}
            >
              {invoice.description}
            </div>
          </div>
          <div
            className={clsx(globalStyles.textSizeBody, styles.senderAddress)}
          >
            <div className={styles.senderAddressStreet}>
              {invoice.senderAddress.street}
            </div>
            <div className={styles.senderAddressCity}>
              {invoice.senderAddress.city}
            </div>
            <div className={styles.senderAddressPostCode}>
              {invoice.senderAddress.postCode}
            </div>
            <div className={styles.senderAddressCountry}>
              {invoice.senderAddress.country}
            </div>
          </div>
        </div>
        <div className={styles.datesClientAddressEmail}>
          <div className={styles.createdDateAndPaymentDueDate}>
            <div className={styles.createdDate}>
              <div
                className={clsx(
                  globalStyles.textSizeBody,
                  styles.createdDateLabel
                )}
              >
                Invoice Date
              </div>
              <div
                className={clsx(
                  globalStyles.textSizeS,
                  styles.createdDateValue
                )}
              >
                {humanizedCreatedDate}
              </div>
            </div>
            <div className={styles.paymentDueDate}>
              <div
                className={clsx(
                  globalStyles.textSizeBody,
                  styles.paymentDueDateLabel
                )}
              >
                Payment Date
              </div>
              <div
                className={clsx(
                  globalStyles.textSizeS,
                  styles.paymentDueDateValue
                )}
              >
                {humanizedPaymentDueDate}
              </div>
            </div>
          </div>
          <div className={styles.clientAddress}>
            <div
              className={clsx(
                globalStyles.textSizeBody,
                styles.clientAddressLabel
              )}
            >
              Bill To
            </div>
            <div className={styles.clientAddressData}>
              <div
                className={clsx(
                  globalStyles.textSizeS,
                  styles.clientAddressName
                )}
              >
                {invoice.clientName}
              </div>
              <div
                className={clsx(
                  globalStyles.textSizeBody,
                  styles.clientAddressInfo
                )}
              >
                <div className={styles.clientAddressStreet}>
                  {invoice.clientAddress.street}
                </div>
                <div className={styles.clientAddressCity}>
                  {invoice.clientAddress.city}
                </div>
                <div className={styles.clientAddressPostCode}>
                  {invoice.clientAddress.postCode}
                </div>
                <div className={styles.clientAddressCountry}>
                  {invoice.clientAddress.country}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.clientEmail}>
            <div
              className={clsx(
                globalStyles.textSizeBody,
                styles.clientEmailLabel
              )}
            >
              Sent to
            </div>
            <div
              className={clsx(globalStyles.textSizeS, styles.clientEmailValue)}
            >
              {invoice.clientEmail}
            </div>
          </div>
        </div>

        <div className={styles.items}>
          <InvoiceDetailItems items={invoice.items} />
        </div>
      </div>
    </div>
  );
}

export default InvoiceDetail;
