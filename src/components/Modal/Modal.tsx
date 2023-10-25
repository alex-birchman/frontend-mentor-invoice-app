import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import clsx from "clsx";

import styles from "./Modal.module.css";
import globalStyles from "@/app/global.module.css";

type ModalProps = {
  isOpen: boolean;
  toggleOpen: () => void;
  trigger: React.ReactNode;
  title: string;
  description: string;
  buttons: React.ReactNode;
};

function Modal({
  isOpen,
  toggleOpen,
  trigger,
  title,
  description,
  buttons,
}: ModalProps) {
  return (
    <Dialog.Root modal open={isOpen} onOpenChange={toggleOpen}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal
        container={document.querySelector("#modal-root") as HTMLElement}
      >
        <Dialog.Overlay className={styles.overlay} onClick={toggleOpen} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title className={globalStyles.textSizeM}>
            {title}
          </Dialog.Title>
          <Dialog.Description
            className={clsx(globalStyles.textSizeBody, styles.description)}
          >
            {description}
          </Dialog.Description>
          <div className={styles.buttons}>{buttons}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Modal;
