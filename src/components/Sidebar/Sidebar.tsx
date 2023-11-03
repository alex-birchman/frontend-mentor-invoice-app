"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

import { useAppDispatch } from "@/store";
import {
  selectIsSidebarOpen,
  selectContentView,
  toggleSidebar,
} from "@/store/sidebar";
import { resetInvoiceForm, selectInvoiceFormState } from "@/store/invoiceForm";
import InvoiceForm from "@/components/Invoices/InvoiceForm";

import styles from "./Sidebar.module.css";

function Sidebar() {
  let content = null;
  const dispatch = useAppDispatch();
  const isOpen = useSelector(selectIsSidebarOpen);
  const contentView = useSelector(selectContentView);
  const invoiceFormState = useSelector(selectInvoiceFormState);

  function handleCloseSidebar() {
    dispatch(toggleSidebar());
    dispatch(resetInvoiceForm());
  }

  switch (contentView) {
    case "invoiceForm": {
      content = (
        <InvoiceForm
          initialState={invoiceFormState}
          handleDismiss={handleCloseSidebar}
        />
      );
      break;
    }
    default: {
      content = null;
      break;
    }
  }

  if (!isOpen) return null;

  return createPortal(
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div className={styles.wrapper}>
          <div className={styles.backdrop} onClick={handleCloseSidebar} />
          <div className={styles.container}>
            <div className={styles.content}>{content}</div>
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>,
    document.querySelector("#sidebar-root") as HTMLElement
  );
}

export default Sidebar;
