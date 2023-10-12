import * as React from "react";
import clsx from "clsx";
import { Plus } from "react-feather";

import styles from "./CreateInvoiceButton.module.css";
import globalStyles from "@/app/global.module.css";

function CreateInvoiceButton({ isShortTitle = false }) {
    const title = isShortTitle ? "New" : "New Invoice";

    return (
        <button className={styles.wrapper}>
            <div className={styles.iconWrapper}>
                <Plus
                    size="1rem"
                    strokeWidth={4}
                    strokeLinecap="square"
                    className={styles.icon}
                />
            </div>
            <span className={clsx(globalStyles.textSizeS, styles.title)}>
                {title}
            </span>
        </button>
    );
}

export default React.memo(CreateInvoiceButton);
