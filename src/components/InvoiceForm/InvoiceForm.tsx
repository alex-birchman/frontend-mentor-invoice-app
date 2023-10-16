import * as React from "react";
import * as Form from "@radix-ui/react-form";
import clsx from "clsx";
import { ChevronLeft } from "react-feather";

import InputField from "@/components/InputField";
import ItemList from "@/components/ItemList";
import Button from "@/components/Button";
import useInvoiceForm from "@/hooks/useInvoiceForm";
import { useInvoices } from "../InvoicesProvider";

import styles from "./InvoiceForm.module.css";
import globalStyles from "@/app/global.module.css";

type InvoiceFormProps = {
    formType: "create" | "edit";
    handleDismiss: () => void;
};

function InvoiceForm({ formType, handleDismiss }: InvoiceFormProps) {
    const { handleCreateInvoice } = useInvoices();
    const {
        form,
        handleChange,
        handleSubmit,
        handleAddItem,
        handleChangeItem,
        handleRemoveItem,
        handleChangeStatus,
    } = useInvoiceForm({
        onSubmit: handleCreateInvoice,
        onAfterSave: handleDismiss,
    });

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
            <Form.Root className={styles.form} onSubmit={handleSubmit}>
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
                            name="senderAddressStreet"
                            type="text"
                            value={form.senderAddressStreet}
                            onChange={handleChange}
                            wrapperClassName={styles.address}
                        />
                        <InputField
                            label="City"
                            name="senderAddressCity"
                            type="text"
                            value={form.senderAddressCity}
                            onChange={handleChange}
                            wrapperClassName={styles.city}
                        />
                        <InputField
                            label="Post Code"
                            name="senderAddressPostCode"
                            type="text"
                            value={form.senderAddressPostCode}
                            onChange={handleChange}
                            wrapperClassName={styles.postCode}
                        />
                        <InputField
                            label="Country"
                            name="senderAddressCountry"
                            type="text"
                            value={form.senderAddressCountry}
                            onChange={handleChange}
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
                            name="clientName"
                            type="text"
                            valueMissingText="can’t be empty"
                            value={form.clientName}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Client’s Email"
                            name="clientEmail"
                            type="email"
                            placeholder="e.g. email@example.com"
                            value={form.clientEmail}
                            onChange={handleChange}
                        />
                        <div className={styles.billAddressFields}>
                            <InputField
                                label="Street Address"
                                name="clientAddressStreet"
                                type="text"
                                wrapperClassName={styles.address}
                                value={form.clientAddressStreet}
                                onChange={handleChange}
                            />
                            <InputField
                                label="City"
                                name="clientAddressCity"
                                type="text"
                                wrapperClassName={styles.city}
                                value={form.clientAddressCity}
                                onChange={handleChange}
                            />
                            <InputField
                                label="Post Code"
                                name="clientAddressPostCode"
                                type="text"
                                wrapperClassName={styles.postCode}
                                value={form.clientAddressPostCode}
                                onChange={handleChange}
                            />
                            <InputField
                                label="Country"
                                name="clientAddressCountry"
                                type="text"
                                wrapperClassName={styles.country}
                                value={form.clientAddressCountry}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={styles.billAdditionalFields}>
                        <div className={styles.dateAndPaymentTerms}>
                            <InputField
                                label="Invoice Date"
                                name="paymentDue"
                                type="date"
                                value={form.paymentDue}
                                onChange={handleChange}
                            />
                            <InputField
                                label="Payment Terms"
                                name="paymentTerms"
                                type="text"
                                value={form.paymentTerms}
                                onChange={handleChange}
                            />
                        </div>
                        <InputField
                            label="Project Description"
                            name="projectDescription"
                            type="text"
                            placeholder="e.g. Graphic Design"
                            value={form.projectDescription}
                            onChange={handleChange}
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
                        <ItemList
                            items={form.items}
                            onAdd={handleAddItem}
                            onChange={handleChangeItem}
                            onDelete={handleRemoveItem}
                        />
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
                            <Button
                                type="submit"
                                styleType="secondary"
                                onClick={() => handleChangeStatus("draft")}
                            >
                                Save as Draft
                            </Button>
                            <Button
                                type="submit"
                                styleType="primary"
                                name="button-save-pending"
                                value="pending"
                                onClick={() => handleChangeStatus("pending")}
                            >
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
