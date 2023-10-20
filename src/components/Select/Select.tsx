import * as React from "react";
import * as RadixSelect from "@radix-ui/react-select";
import * as Label from "@radix-ui/react-label";
import clsx from "clsx";
import { ChevronDown, ChevronUp } from "react-feather";

import styles from "./Select.module.css";
import globalStyles from "@/app/global.module.css";

type SelectItemProps = {
  children: React.ReactNode;
  value: string;
  className?: string;
};

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, value, ...props }, forwardedRef) => {
    return (
      <RadixSelect.Item
        ref={forwardedRef}
        className={clsx(styles.item, className)}
        value={value}
        {...props}
      >
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      </RadixSelect.Item>
    );
  }
);

SelectItem.displayName = "SelectItem";

type SelectProps = {
  options: {
    value: string;
    label: string;
  }[];
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
} & React.ComponentProps<typeof RadixSelect.Root>;

function Select({
  options,
  onChange,
  label,
  placeholder,
  defaultValue,
  ...delegated
}: SelectProps) {
  const id = React.useId();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      {label && (
        <Label.Root
          htmlFor={id}
          className={clsx(globalStyles.textSizeBody, styles.label)}
        >
          {label}
        </Label.Root>
      )}
      <RadixSelect.Root
        open={isOpen}
        onOpenChange={setIsOpen}
        defaultValue={defaultValue}
        onValueChange={onChange}
        {...delegated}
      >
        <RadixSelect.Trigger
          id={id}
          className={clsx(globalStyles.textSizeS2, styles.trigger)}
        >
          <RadixSelect.Value placeholder={placeholder} />
          <RadixSelect.Icon>
            {isOpen ? (
              <ChevronUp
                size="1rem"
                strokeWidth={2}
                strokeLinecap="square"
                className={styles.triggerIcon}
              />
            ) : (
              <ChevronDown
                size="1rem"
                strokeWidth={2}
                strokeLinecap="square"
                className={styles.triggerIcon}
              />
            )}
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content
            position="popper"
            side="bottom"
            sideOffset={8}
            className={clsx(globalStyles.textSizeS2, styles.content)}
          >
            <RadixSelect.Viewport asChild>
              <RadixSelect.Group>
                {options.map(({ label, value }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </RadixSelect.Group>
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </div>
  );
}

export default Select;
