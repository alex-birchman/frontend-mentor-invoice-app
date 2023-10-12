"use client";

import * as React from "react";
import clsx from "clsx";

import InvoicesFilter from "@/components/InvoicesFilter";
import CreateInvoiceButton from "@/components/CreateInvoiceButton";
import useMediaQuery from "@/hooks/useMediaQuery";

import styles from "./InvoicesHeader.module.css";
import globalStyles from "@/app/global.module.css";

function InvoicesHeader() {
    const { isMobile } = useMediaQuery();

    const description = `${isMobile ? "" : "There are"} 7 total invoices`;

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h1 className={globalStyles.textSizeL}>Invoices</h1>
                    <p
                        className={clsx(
                            globalStyles.textSizeBody,
                            styles.description
                        )}
                    >
                        {description}
                    </p>
                </div>
                <div className={styles.actions}>
                    <InvoicesFilter isShortTitle={isMobile} />
                    <CreateInvoiceButton isShortTitle={isMobile} />
                </div>
            </div>
        </div>
    );
}

export default InvoicesHeader;
