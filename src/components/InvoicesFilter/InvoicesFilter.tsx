"use client";

import * as React from "react";
import clsx from "clsx";
import { Check, ChevronDown, ChevronUp } from "react-feather";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import styles from "./InvoicesFilter.module.css";
import globalStyles from "@/app/global.module.css";

const initialFilterStatuses: Record<string, boolean> = {
    draft: false,
    pending: false,
    paid: false,
};

function FilterSatatuses() {
    const [filterStatuses, setFilterStatuses] = React.useState(
        initialFilterStatuses
    );

    const filtersList = Object.keys(filterStatuses);

    return (
        <form>
            {filtersList.map((option) => (
                <div key={option} className={styles.checkboxItem}>
                    <Checkbox.Root
                        className={styles.checkboxRoot}
                        id={option}
                        checked={filterStatuses[option] === true}
                        onCheckedChange={(checked) => {
                            setFilterStatuses((prevFilterStatuses) => ({
                                ...prevFilterStatuses,
                                [option]: checked as boolean,
                            }));
                        }}
                        value={option}
                    >
                        <Checkbox.Indicator
                            className={styles.checkboxIndicator}
                        >
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
                        className={clsx(
                            globalStyles.textSizeS,
                            styles.checkboxLabel
                        )}
                    >
                        {option}
                    </label>
                </div>
            ))}
        </form>
    );
}

function InvoicesFilter({ isShortTitle = false }) {
    const [isOpen, setIsOpen] = React.useState(false);

    const title = isShortTitle ? "Filter" : "Filter by status";

    return (
        <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenu.Trigger asChild>
                <div className={styles.selector}>
                    <p className={globalStyles.textSizeS}>{title}</p>
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
