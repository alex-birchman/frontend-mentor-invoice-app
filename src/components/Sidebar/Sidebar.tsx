"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

import InvoiceForm from "@/components/InvoiceForm";

import styles from "./Sidebar.module.css";
import useToggle from "@/hooks/useToggle";

function Sidebar() {
  const [isOpen, toggleSidebar] = useToggle();
  if (!isOpen) return null;

  return createPortal(
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div className={styles.wrapper}>
          <div
            className={styles.backdrop}
            onClick={toggleSidebar as () => void}
          />
          <div className={styles.container}>
            <div className={styles.content}>
              <InvoiceForm handleDismiss={toggleSidebar as () => void} />
            </div>
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>,
    document.querySelector("#sidebar-root") as HTMLElement
  );
}

export default Sidebar;
