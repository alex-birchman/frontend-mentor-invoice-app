"use client";

import * as React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import InvoiceStatus from "@/components/InvoiceStatus";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import useToggle from "@/hooks/useToggle";
import { useAppDispatch } from "@/store";
import { selectInvoiceFormStateById } from "@/store/invoices";
import { setSidebarContentView, toggleSidebar } from "@/store/sidebar";
import { setInvoiceForm, setInvoiceFormType } from "@/store/invoiceForm";
import { removeInvoice, markInvoiceAsPaid } from "@/store/invoices";

import styles from "./InvoiceDetailActions.module.css";
import globalStyles from "@/app/global.module.css";

type InvoiceDetailActionsProps = {
  invoiceId: string;
} & React.ComponentPropsWithRef<"div">;

const InvoiceDetailActions = React.forwardRef(function InvoiceDetailActions(
  { invoiceId }: InvoiceDetailActionsProps,
  forwardedRef: React.Ref<HTMLDivElement>
) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isOpen, toggleModal] = useToggle(false);

  const [isShowActionsShadow, setIsShowActionsShadow] = React.useState(false);
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

  React.useEffect(() => {
    const refObject = forwardedRef as React.RefObject<HTMLDivElement>;

    if (!refObject || !refObject.current) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setIsShowActionsShadow(!entry.isIntersecting);
    });

    observer.observe(refObject.current);

    return () => {
      observer.disconnect();
    };
  }, [forwardedRef]);

  return (
    <div className={styles.wrapper} ref={forwardedRef}>
      <div className={styles.status}>
        <div className={clsx(globalStyles.textSizeBody, styles.statusLabel)}>
          Status
        </div>
        <InvoiceStatus
          status={invoiceFormState?.status || "draft"}
          className={styles.statusValue}
        />
      </div>
      <div
        className={clsx(styles.actions, {
          [styles.actionsShadow]: isShowActionsShadow,
        })}
      >
        {invoiceFormState?.status !== "paid" && (
          <Button
            styleType="tertiary"
            className={styles.actionsEdit}
            onClick={handleEditInvoice}
          >
            Edit
          </Button>
        )}
        <Modal
          isOpen={isOpen as boolean}
          toggleOpen={toggleModal as () => void}
          trigger={
            <Button styleType="danger" className={styles.actionsDelete}>
              Delete
            </Button>
          }
          title="Confirm Deletion"
          description={`Are you sure you want to delete invoice #${invoiceId}? This action cannot be undone.`}
          buttons={
            <div className={styles.modalButtons}>
              <Button styleType="tertiary" onClick={toggleModal as () => void}>
                Cancel
              </Button>
              <Button
                styleType="danger"
                className={styles.actionsDelete}
                onClick={handleDeleteInvoice}
              >
                Delete
              </Button>
            </div>
          }
        />
        {invoiceFormState?.status !== "paid" && (
          <Button
            styleType="primary"
            className={styles.actionsPaid}
            onClick={handleMarkAsPaid}
          >
            Mark as Paid
          </Button>
        )}
      </div>
    </div>
  );
});

export default InvoiceDetailActions;
