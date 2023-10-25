"use client";

import * as React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import InvoiceStatus from "@/components/InvoiceStatus";
import Button from "@/components/Button";
import { useAppDispatch } from "@/store";
import { selectInvoiceFormStateById } from "@/store/invoices";
import { setSidebarContentView, toggleSidebar } from "@/store/sidebar";
import { setInvoiceForm, setInvoiceFormType } from "@/store/invoiceForm";
import { removeInvoice, markInvoiceAsPaid } from "@/store/invoices";

import styles from "./InvoiceDetailActions.module.css";
import globalStyles from "@/app/global.module.css";

type InvoiceDetailActionsProps = {
  invoiceId: string;
};

function InvoiceDetailActions({ invoiceId }: InvoiceDetailActionsProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const invoiceFormState = useSelector(selectInvoiceFormStateById)(invoiceId);

  function handleEditInvoice() {
    if (!invoiceFormState) return;

    dispatch(setInvoiceFormType("edit"));
    dispatch(setInvoiceForm(invoiceFormState));
    dispatch(setSidebarContentView("invoiceForm"));
    dispatch(toggleSidebar());
  }

  function handleDeleteInvoice() {
    dispatch(removeInvoice(invoiceId));
    router.push("/");
  }

  function handleMarkAsPaid() {
    dispatch(markInvoiceAsPaid(invoiceId));
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.status}>
        <div className={clsx(globalStyles.textSizeBody, styles.statusLabel)}>
          Status
        </div>
        <InvoiceStatus
          status={invoiceFormState?.status || "draft"}
          className={styles.statusValue}
        />
      </div>
      <div className={styles.actions}>
        <Button
          styleType="tertiary"
          className={styles.actionsEdit}
          onClick={handleEditInvoice}
        >
          Edit
        </Button>
        <Button
          styleType="danger"
          className={styles.actionsDelete}
          onClick={handleDeleteInvoice}
        >
          Delete
        </Button>
        <Button
          styleType="primary"
          className={styles.actionsPaid}
          onClick={handleMarkAsPaid}
        >
          Mark as Paid
        </Button>
      </div>
    </div>
  );
}

export default InvoiceDetailActions;
