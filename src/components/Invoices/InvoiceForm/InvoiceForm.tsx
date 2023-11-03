import * as React from "react";
import * as Form from "@radix-ui/react-form";
import clsx from "clsx";
import { ChevronLeft } from "react-feather";
import { useSelector } from "react-redux";

import ButtonWithIcon from "@/components/ButtonWithIcon";
import InputField from "@/components/InputField";
import ItemList from "@/components/Invoices/ItemList";
import Button from "@/components/Button";
import InvoiceFormErrorMessage from "@/components/Invoices/InvoiceFormErrorMessage";
import Select from "@/components/Select";
import DatePicker from "@/components/DatePicker";
import useScrollTo from "@/hooks/useScrollTo";
import { useAppDispatch } from "@/store";
import { addInvoice, updateInvoice } from "@/store/invoices";
import { selectInvoiceFormType } from "@/store/invoiceForm";
import { invoiceFromFormMapper } from "@/utils/formMappers";
import { InvoiceForm } from "@/types/invoiceForm";
import { getRandomInvoiceId } from "@/utils/invoice";
import useInvoiceForm from "./InvoiceForm.hooks";
import { PAYMENT_TERM_OPTIONS } from "./InvoiceForm.const";

import styles from "./InvoiceForm.module.css";
import globalStyles from "@/app/global.module.css";

type InvoiceFormProps = {
  initialState?: InvoiceForm;
  handleDismiss: () => void;
};

function InvoiceForm({ initialState, handleDismiss }: InvoiceFormProps) {
  const dispatch = useAppDispatch();
  const {
    form,
    handleChange,
    handleDateChange,
    handleAddItem,
    handleChangeItem,
    handleRemoveItem,
    handleChangeStatus,
    handleSelectChange,
    getValidationErrors,
    checkValidation,
  } = useInvoiceForm({
    initialState,
  });
  const formType = useSelector(selectInvoiceFormType);
  const errorMessages = getValidationErrors();
  const thresholdRef = React.useRef<HTMLDivElement>(null);
  const [isShowActionsShadow, setIsShowActionsShadow] = React.useState(false);

  const { ref: errorMessagesRef, triggerScroll } = useScrollTo({
    condition: errorMessages.length > 0,
  });

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    triggerScroll();

    const isFormValid = checkValidation();

    if (!isFormValid) {
      return;
    }

    switch (formType) {
      case "create": {
        const formInvoice = invoiceFromFormMapper({
          ...form,
          id: getRandomInvoiceId(),
          createdAt: new Date().toISOString(),
          paymentDue: new Date(form.paymentDue).toISOString(),
          total: form.items.reduce((acc, item) => acc + item.total, 0),
        });
        dispatch(addInvoice(formInvoice));
        break;
      }
      case "edit": {
        if (!initialState) {
          return;
        }

        const { id, createdAt } = initialState;

        if (!(id && createdAt)) {
          return;
        }

        const formInvoice = invoiceFromFormMapper({
          ...form,
          id,
          createdAt: new Date(createdAt).toISOString(),
          paymentDue: new Date(form.paymentDue).toISOString(),
          total: form.items.reduce((acc, item) => acc + item.total, 0),
        });
        dispatch(updateInvoice({ id, changes: formInvoice }));
        break;
      }
    }

    handleDismiss();
  }

  const title =
    formType === "create" ? "New Invoice" : `Edit #${initialState?.id}`;

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setIsShowActionsShadow(!entry.isIntersecting);
    });

    observer.observe(thresholdRef.current as HTMLDivElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <ButtonWithIcon
        type="button"
        className={clsx(globalStyles.textSizeS2, styles.backButton)}
        onClick={handleDismiss}
        spacing={15}
        iconLeft={
          <ChevronLeft
            size="1rem"
            strokeWidth={2}
            strokeLinecap="square"
            className={styles.backButtonIcon}
          />
        }
      >
        Go back
      </ButtonWithIcon>
      <h1 className={clsx(globalStyles.textSizeM, styles.title)}>{title}</h1>
      <Form.Root className={styles.form} onSubmit={handleFormSubmit}>
        <div className={styles.billFrom}>
          <span className={clsx(globalStyles.textSizeS2, styles.billFromTitle)}>
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
          <span className={clsx(globalStyles.textSizeS2, styles.billToTitle)}>
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
              required
              label="Client’s Email"
              name="clientEmail"
              type="email"
              placeholder="e.g. email@example.com"
              valueMissingText="can’t be empty"
              typeMismatchText="invalid email address"
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
              <DatePicker
                label="Issue Date"
                value={new Date(form.paymentDue)}
                onChange={handleDateChange}
              />
              <Select
                label="Payment Terms"
                options={PAYMENT_TERM_OPTIONS}
                defaultValue={String(form.paymentTerms)}
                onChange={handleSelectChange}
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
          <span className={clsx(globalStyles.textSizeM, styles.itemListTitle)}>
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
        {errorMessages.length > 0 && (
          <div ref={errorMessagesRef} className={styles.errorMessages}>
            <InvoiceFormErrorMessage errorMessages={errorMessages} />
          </div>
        )}
        <div
          className={clsx(styles.actions, {
            [styles.actionsShadow]: isShowActionsShadow,
            [styles.actionsEdit]: formType === "edit",
          })}
        >
          {formType === "create" && (
            <>
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
            </>
          )}
          {formType === "edit" && (
            <>
              <Button
                type="button"
                styleType="tertiary"
                onClick={handleDismiss}
              >
                Cancel
              </Button>
              <Form.Submit asChild>
                <Button
                  type="submit"
                  styleType="primary"
                  name="button-save-changes"
                  value="save-changes"
                >
                  Save Changes
                </Button>
              </Form.Submit>
            </>
          )}
        </div>
        <div ref={thresholdRef} />
      </Form.Root>
    </div>
  );
}

export default InvoiceForm;
