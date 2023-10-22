import * as React from "react";

import {
  InvoiceForm,
  InvoiceFormItem,
  InvoiceStatusType,
  InvoiceFormValidation,
} from "@/types/invoice";

import {
  ITEMS_ERROR_VALIDATION_MESSAGE,
  PAYMENT_TERM_DEFAULT_VALUE,
} from "@/components/InvoiceForm/InvoiceForm.const";

const inititalFormState: InvoiceForm = {
  senderAddressStreet: "",
  senderAddressCity: "",
  senderAddressPostCode: "",
  senderAddressCountry: "",
  clientName: "",
  clientEmail: "",
  clientAddressStreet: "",
  clientAddressCity: "",
  clientAddressPostCode: "",
  clientAddressCountry: "",
  paymentDue: new Date(),
  paymentTerms: Number(PAYMENT_TERM_DEFAULT_VALUE),
  projectDescription: "",
  items: [],
  status: "draft",
};

const initialFormValidationState: InvoiceFormValidation = {
  items: null,
};

function useInvoiceForm({
  onSubmit,
  onAfterSubmit,
}: {
  onSubmit: (form: InvoiceForm) => void;
  onAfterSubmit?: () => void;
}) {
  const [form, setForm] = React.useState<InvoiceForm>(inititalFormState);
  const [formValidation, setFormValidation] = React.useState(
    initialFormValidationState
  );

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const isFormValid = checkValidation();

    if (!isFormValid) {
      return;
    }

    onSubmit(form);
    onAfterSubmit && onAfterSubmit();
  }

  function handleChangeStatus(status: InvoiceStatusType) {
    setForm((prevForm) => ({
      ...prevForm,
      status,
    }));
  }

  function handleSelectChange(value: string) {
    setForm((prevForm) => ({
      ...prevForm,
      paymentTerms: Number(value),
    }));
  }

  function handleDateChange(date: Date) {
    setForm((prevForm) => ({
      ...prevForm,
      paymentDue: date,
    }));
  }

  function handleAddItem() {
    setForm((prevForm) => ({
      ...prevForm,
      items: [
        ...prevForm.items,
        {
          id: crypto.randomUUID(),
          name: "",
          quantity: 0,
          price: 0,
          total: 0,
        },
      ],
    }));

    setFormValidation((prevFormValidation) => ({
      ...prevFormValidation,
      items: null,
    }));
  }

  function handleChangeItem<K extends keyof InvoiceFormItem>(
    id: string,
    param: K,
    value: InvoiceFormItem[K],
    total?: number
  ) {
    setForm((prevForm) => {
      return {
        ...prevForm,
        items: prevForm.items.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              [param]: value + "",
              total: total || item.total,
            };
          }
          return item;
        }),
      };
    });
  }

  function handleRemoveItem(id: string) {
    setForm((prevForm) => ({
      ...prevForm,
      items: prevForm.items.filter((item) => item.id !== id),
    }));
  }

  function checkValidation() {
    const { items } = form;
    const nextFormValidation = { ...formValidation };

    nextFormValidation.items =
      items.length === 0 ? ITEMS_ERROR_VALIDATION_MESSAGE : null;

    setFormValidation(nextFormValidation);

    return Object.values(nextFormValidation).every((field) => field === null);
  }

  function getValidationErrors() {
    return Object.values(formValidation).filter((error) => error !== null);
  }

  return {
    form,
    handleChange,
    handleSubmit,
    handleDateChange,
    handleAddItem,
    handleChangeItem,
    handleRemoveItem,
    handleChangeStatus,
    handleSelectChange,
    getValidationErrors,
  };
}

export default useInvoiceForm;
