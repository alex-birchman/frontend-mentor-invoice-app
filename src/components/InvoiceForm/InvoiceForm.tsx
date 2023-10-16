import * as React from "react";
import * as Form from "@radix-ui/react-form";
import clsx from "clsx";
import { ChevronLeft } from "react-feather";

import InputField from "@/components/InputField";
import ItemList from "@/components/ItemList";
import Button from "@/components/Button";

import styles from "./InvoiceForm.module.css";
import globalStyles from "@/app/global.module.css";

type InvoiceFormProps = {
    formType: "create" | "edit";
    handleDismiss: () => void;
};

function InvoiceForm({ formType, handleDismiss }: InvoiceFormProps) {
    const title = formType === "create" ? "New Invoice" : "Edit #XM9141";

    return (
        <div className={styles.wrapper}>
            <button
                type="button"
                className={clsx(globalStyles.textSizeS2, styles.backButton)}
                onClick={handleDismiss}
            >
                <ChevronLeft
                    size="1rem"
                    strokeWidth={2}
                    strokeLinecap="square"
                    className={styles.backButtonIcon}
                />
                <span>Go back</span>
            </button>
            <h1 className={clsx(globalStyles.textSizeM, styles.title)}>
                {title}
            </h1>
            <Form.Root
                className={styles.form}
                onSubmit={(event) => {
                    event.preventDefault();
                }}
            >
                <div className={styles.billFrom}>
                    <span
                        className={clsx(
                            globalStyles.textSizeS2,
                            styles.billFromTitle
                        )}
                    >
                        Bill From
                    </span>
                    <div className={styles.billAddressFields}>
                        <InputField
                            label="Street Address"
                            name="bill-from-street-address"
                            type="text"
                            wrapperClassName={styles.address}
                        />
                        <InputField
                            label="City"
                            name="bill-from-city"
                            type="text"
                            wrapperClassName={styles.city}
                        />
                        <InputField
                            label="Post Code"
                            name="bill-from-post-code"
                            type="text"
                            wrapperClassName={styles.postCode}
                        />
                        <InputField
                            label="Country"
                            name="bill-from-country"
                            type="text"
                            wrapperClassName={styles.country}
                        />
                    </div>
                </div>
                <div className={styles.billTo}>
                    <span
                        className={clsx(
                            globalStyles.textSizeS2,
                            styles.billToTitle
                        )}
                    >
                        Bill To
                    </span>
                    <div className={styles.billToFields}>
                        <InputField
                            required
                            label="Client’s Name"
                            name="bill-to-client-name"
                            type="text"
                            valueMissingText="can’t be empty"
                        />
                        <InputField
                            label="Client’s Email"
                            name="bill-to-client-email"
                            type="email"
                            placeholder="e.g. email@example.com"
                        />
                        <div className={styles.billAddressFields}>
                            <InputField
                                label="Street Address"
                                name="bill-to-street-address"
                                type="text"
                                wrapperClassName={styles.address}
                            />
                            <InputField
                                label="City"
                                name="bill-to-city"
                                type="text"
                                wrapperClassName={styles.city}
                            />
                            <InputField
                                label="Post Code"
                                name="bill-to-post-code"
                                type="text"
                                wrapperClassName={styles.postCode}
                            />
                            <InputField
                                label="Country"
                                name="bill-to-country"
                                type="text"
                                wrapperClassName={styles.country}
                            />
                        </div>
                    </div>
                    <div className={styles.billAdditionalFields}>
                        <div className={styles.dateAndPaymentTerms}>
                            <InputField
                                label="Invoice Date"
                                name="invoice-date"
                                type="date"
                            />
                            <InputField
                                label="Payment Terms"
                                name="payment-terms"
                                type="text"
                            />
                        </div>
                        <InputField
                            label="Project Description"
                            name="project-description"
                            type="text"
                            placeholder="e.g. Graphic Design"
                        />
                    </div>
                </div>
                <div className={styles.itemList}>
                    <span
                        className={clsx(
                            globalStyles.textSizeM,
                            styles.itemListTitle
                        )}
                    >
                        Item List
                    </span>
                    <div className={styles.itemListContent}>
                        <ItemList />
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button
                        type="button"
                        styleType="tertiary"
                        onClick={handleDismiss}
                    >
                        Discard
                    </Button>
                    <Form.Submit asChild>
                        <div className={styles.actionsSaveButtons}>
                            <Button type="submit" styleType="secondary">
                                Save as Draft
                            </Button>
                            <Button type="submit" styleType="primary">
                                Save & Send
                            </Button>
                        </div>
                    </Form.Submit>
                </div>
            </Form.Root>
        </div>
    );
}

export default InvoiceForm;
