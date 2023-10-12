import * as React from "react";
import clsx from "clsx";
import { Plus } from "react-feather";

import Sidebar from "@/components/Sidebar";
import useToggle from "@/hooks/useToggle";

import styles from "./CreateInvoiceButton.module.css";
import globalStyles from "@/app/global.module.css";

function CreateInvoiceButton({ isShortTitle = false }) {
    const [isSidebarOpen, toggleSidebarOppen] = useToggle(false);

    const title = isShortTitle ? "New" : "New Invoice";

    return (
        <>
            <button className={styles.wrapper} onClick={toggleSidebarOppen}>
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
            {isSidebarOpen && <Sidebar handleDismiss={toggleSidebarOppen} />}
        </>
    );
}

export default React.memo(CreateInvoiceButton);
