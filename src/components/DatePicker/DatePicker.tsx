import * as React from "react";
import * as Label from "@radix-ui/react-label";
import clsx from "clsx";
import ReactDatePicker from "react-datepicker";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "react-feather";

import styles from "./DatePicker.module.css";
import globalStyles from "@/app/global.module.css";

type DatePickerInputProps = {
  value: string;
  onClick: () => void;
};

const DatePickerInput = React.forwardRef(
  (
    { value, onClick }: DatePickerInputProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => (
    <button
      ref={ref}
      type="button"
      className={clsx(globalStyles.textSizeS2, styles.datepickerInput)}
      onClick={onClick}
    >
      <span>{value}</span>
      <Image
        src="/icon-calendar.svg"
        alt="Icon calendar"
        width={16}
        height={16}
        className={styles.datepickerInputIcon}
      />
    </button>
  )
);

DatePickerInput.displayName = "DatePickerInput";

function DatePickerHeader({ date, decreaseMonth, increaseMonth }: any) {
  return (
    <div className={clsx(globalStyles.textSizeS2, styles.datepickerHeader)}>
      <button
        type="button"
        className={styles.datepickerHeaderButton}
        onClick={decreaseMonth}
      >
        <ChevronLeft
          size="1rem"
          strokeWidth={2}
          strokeLinecap="square"
          className={styles.datepickerHeaderIcon}
        />
      </button>
      <span className={styles.datepickerHeaderDate}>
        {date.toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        })}
      </span>
      <button
        type="button"
        className={styles.datepickerHeaderButton}
        onClick={increaseMonth}
      >
        <ChevronRight
          size="1rem"
          strokeWidth={2}
          strokeLinecap="square"
          className={styles.datepickerHeaderIcon}
        />
      </button>
    </div>
  );
}

type DatePickerProps = {
  value: Date | null | undefined;
  onChange(date: Date | null): void;
  label?: string;
};

function DatePicker(
  { value, onChange, label }: DatePickerProps = {
    value: new Date(),
    onChange: () => {},
  }
) {
  const id = React.useId();

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
      <ReactDatePicker
        disabledKeyboardNavigation
        id={id}
        portalId="calendar-root"
        selected={value}
        dateFormat="dd MMM yyyy"
        showPopperArrow={false}
        // React.createElelement is used to avoid the following type errors:
        // https://github.com/Hacker0x01/react-datepicker/issues/2165
        customInput={React.createElement(DatePickerInput)}
        renderCustomHeader={(params) => <DatePickerHeader {...params} />}
        wrapperClassName={styles.datepicker}
        calendarClassName={styles.calendar}
        monthClassName={() => styles.month}
        weekDayClassName={() => styles.datepickerHeaderDayNames}
        dayClassName={(date) => {
          return value && date.toDateString() === value.toDateString()
            ? clsx(globalStyles.textSizeS2, styles.calendarDaySelected)
            : clsx(globalStyles.textSizeS2, styles.calendarDay);
        }}
        onChange={(date) => onChange(date)}
      />
    </div>
  );
}

export default DatePicker;
