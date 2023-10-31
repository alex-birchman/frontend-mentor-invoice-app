"use client";

import * as React from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { Check, ChevronDown, ChevronUp } from "react-feather";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { useAppDispatch } from "@/store";
import {
  selectInvoicesFilters,
  InvoicesFilters,
  toggleInvoicesFilter,
  selectSelectedCountFilter,
} from "@/store/invoices";

import styles from "./InvoicesFilter.module.css";
import globalStyles from "@/app/global.module.css";

function FilterSatatuses() {
  const dispatch = useAppDispatch();
  const filters = useSelector(selectInvoicesFilters);
  const filtersList = Object.keys(filters) as InvoicesFilters[];

  return (
    <form>
      {filtersList.map((option) => (
        <div key={option} className={styles.checkboxItem}>
          <Checkbox.Root
            className={styles.checkboxRoot}
            id={option}
            checked={filters[option] === true}
            onCheckedChange={(checked) => {
              dispatch(
                toggleInvoicesFilter({
                  filter: option,
                  value: checked as boolean,
                })
              );
            }}
            value={option}
          >
            <Checkbox.Indicator className={styles.checkboxIndicator}>
              <Check
                size="0.625rem"
                strokeWidth={4}
                strokeLinecap="square"
                className={styles.checkboxIcon}
              />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label
            htmlFor={option}
            className={clsx(globalStyles.textSizeS, styles.checkboxLabel)}
          >
            {option}
          </label>
        </div>
      ))}
    </form>
  );
}

function InvoicesFilter() {
  const [isOpen, setIsOpen] = React.useState(false);
  const selectedCountFilters = useSelector(selectSelectedCountFilter);

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenu.Trigger asChild>
        <div className={styles.selector}>
          <p className={clsx(globalStyles.textSizeS, styles.titleDesktop)}>
            Filter by status{" "}
            {selectedCountFilters > 0 && `(${selectedCountFilters})`}
          </p>
          <p className={clsx(globalStyles.textSizeS, styles.titleMobile)}>
            Filter {selectedCountFilters > 0 && `(${selectedCountFilters})`}
          </p>
          {isOpen ? (
            <ChevronUp
              size="1rem"
              strokeWidth={2}
              strokeLinecap="square"
              className={styles.selectorIcon}
            />
          ) : (
            <ChevronDown
              size="1rem"
              strokeWidth={2}
              strokeLinecap="square"
              className={styles.selectorIcon}
            />
          )}
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.content} sideOffset={5}>
          <FilterSatatuses />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default React.memo(InvoicesFilter);
