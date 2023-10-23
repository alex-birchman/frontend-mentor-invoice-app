"use client";

import * as React from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "react-feather";

import styles from "./InvoiceDetailBackButton.module.css";
import globalStyles from "@/app/global.module.css";

import ButtonWithIcon from "@/components/ButtonWithIcon";

function InvoiceDetailBackButton() {
  const router = useRouter();

  function handleClick() {
    router.push("/");
  }

  return (
    <ButtonWithIcon
      type="button"
      className={clsx(globalStyles.textSizeS2)}
      onClick={handleClick}
      spacing={15}
      iconLeft={
        <ChevronLeft
          size="1rem"
          strokeWidth={2}
          strokeLinecap="square"
          className={styles.backButtonIcon}
        />
      }
    >
      Go back
    </ButtonWithIcon>
  );
}

export default InvoiceDetailBackButton;
