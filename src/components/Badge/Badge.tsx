import * as React from "react";
import clsx from "clsx";

import styles from "./Badge.module.css";
import globalStyles from "@/app/global.module.css";

function Badge({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx(globalStyles.textSizeBody, styles.wrapper, className)}>
      {children}
    </div>
  );
}

export default Badge;
