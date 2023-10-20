import * as React from "react";
import clsx from "clsx";
import * as Form from "@radix-ui/react-form";

import styles from "./InputField.module.css";
import globalStyles from "@/app/global.module.css";

type InputFieldProps = {
  label: string;
  name: string;
  isEmpty?: boolean;
  wrapperClassName?: string;
  valueMissingText?: string;
  typeMismatchText?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function InputField({
  className,
  label,
  name,
  isEmpty,
  wrapperClassName,
  valueMissingText,
  typeMismatchText,
  ...inputAttributes
}: InputFieldProps) {
  const id = React.useId();

  return (
    <Form.Field className={clsx(styles.wrapper, wrapperClassName)} name={name}>
      {label && (
        <div className={styles.labelWrapper}>
          <Form.Label
            htmlFor={id}
            className={clsx(
              globalStyles.textSizeBody,
              styles.label,
              isEmpty && styles.labelEmpty
            )}
          >
            {label}
          </Form.Label>
          {valueMissingText && (
            <Form.Message
              className={clsx(globalStyles.textSizeXS, styles.emptyText)}
              match="valueMissing"
            >
              {valueMissingText}
            </Form.Message>
          )}
          {typeMismatchText && (
            <Form.Message
              className={clsx(globalStyles.textSizeXS, styles.emptyText)}
              match="typeMismatch"
            >
              {typeMismatchText}
            </Form.Message>
          )}
        </div>
      )}
      <Form.Control asChild>
        <input
          id={id}
          {...inputAttributes}
          className={clsx(
            globalStyles.textSizeS2,
            styles.input,
            isEmpty && styles.inputEmpty,
            className
          )}
        />
      </Form.Control>
    </Form.Field>
  );
}

export default React.memo(InputField);
