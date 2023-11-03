import * as React from "react";
import clsx from "clsx";

import styles from "./InvoiceFormErrorMessage.module.css";
import globalStyles from "@/app/global.module.css";

type InvoiceFormErrorMessageProps = {
  errorMessages: string[];
};

function InvoiceFormErrorMessage({
  errorMessages,
}: InvoiceFormErrorMessageProps) {
  if (errorMessages.length === 0) return null;

  return (
    <ul className={clsx(globalStyles.textSizeBody, styles.list)}>
      {errorMessages.map((message) => (
        <li key={message}>- {message}</li>
      ))}
    </ul>
  );
}

export default InvoiceFormErrorMessage;
