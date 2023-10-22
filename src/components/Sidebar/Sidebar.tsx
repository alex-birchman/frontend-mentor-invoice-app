import * as React from "react";
import { createPortal } from "react-dom";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

import InvoiceForm from "@/components/InvoiceForm";

import styles from "./Sidebar.module.css";

type SidebarProps = {
  handleDismiss: () => void;
};

function Sidebar({ handleDismiss }: SidebarProps) {
  return createPortal(
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div className={styles.wrapper}>
          <div className={styles.backdrop} onClick={handleDismiss} />
          <div className={styles.container}>
            <div className={styles.content}>
              <InvoiceForm formType={"create"} handleDismiss={handleDismiss} />
            </div>
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>,
    document.querySelector("#sidebar-root") as HTMLElement
  );
}

export default Sidebar;
