import * as React from "react";
import clsx from "clsx";
import { Circle } from "react-feather";

import { InvoiceStatusType } from "@/types/invoice";

import styles from "./InvoiceStatus.module.css";
import globalStyles from "@/app/global.module.css";

type InvoiceStatusProps = {
    status: InvoiceStatusType;
} & React.HTMLAttributes<HTMLDivElement>;

function InvoiceStatus({ status, ...delegated }: InvoiceStatusProps) {
    return (
        <div className={clsx(styles.wrapper, delegated.className)}>
            <div className={clsx(styles.content, styles[status])}>
                <Circle
                    size="0.5rem"
                    className={clsx(styles.icon, styles[status])}
                />
                <span className={clsx(globalStyles.textSizeS, styles.title)}>
                    {status}
                </span>
            </div>
        </div>
    );
}

export default InvoiceStatus;
