import * as React from "react";
import clsx from "clsx";

import styles from "./ButtonWithIcon.module.css";
import globalStyles from "@/app/global.module.css";

type ButtonWithIconProps = {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  spacing?: number;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function ButtonWithIcon({
  children,
  onClick,
  className,
  iconLeft,
  iconRight,
  spacing = 8,
  ...delegated
}: ButtonWithIconProps) {
  return (
    <div className={className}>
      <button
        {...delegated}
        className={clsx(globalStyles.textSizeS2, styles.button)}
        style={{
          gap: spacing,
        }}
        onClick={onClick}
      >
        {iconLeft && iconLeft}
        <span>{children}</span>
        {iconRight && iconRight}
      </button>
    </div>
  );
}

export default ButtonWithIcon;
