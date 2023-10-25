import * as React from "react";
import clsx from "clsx";

import { ButtonType } from "@/types/button";

import styles from "./Button.module.css";
import globalStyles from "@/app/global.module.css";

type ButtonProps = {
  styleType: ButtonType;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, styleType, className, ...delegated }: ButtonProps) {
  return (
    <button
      className={clsx(
        globalStyles.textSizeS2,
        styles.button,
        styles[styleType],
        className
      )}
      {...delegated}
    >
      {children}
    </button>
  );
}

export default Button;
