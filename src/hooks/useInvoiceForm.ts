import * as React from "react";

import {
    InvoiceForm,
    InvoiceFormItem,
    InvoiceStatusType,
} from "@/types/invoice";

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
    paymentDue: "",
    paymentTerms: 0,
    projectDescription: "",
    items: [],
    status: "draft",
};

function useInvoiceForm({
    onSubmit,
    onAfterSave,
}: {
    onSubmit: (form: InvoiceForm) => void;
    onAfterSave?: () => void;
}) {
    const [form, setForm] = React.useState<InvoiceForm>(inititalFormState);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSubmit(form);
        onAfterSave && onAfterSave();
    }

    function handleChangeStatus(status: InvoiceStatusType) {
        setForm((prevForm) => ({
            ...prevForm,
            status,
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
    }

    function handleChangeItem<K extends keyof InvoiceFormItem>(
        id: string,
        param: K,
        value: InvoiceFormItem[K]
    ) {
        setForm((prevForm) => ({
            ...prevForm,
            items: prevForm.items.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        [param]: value + "",
                        total: item.quantity * item.price,
                    };
                }
                return item;
            }),
        }));
    }

    function handleRemoveItem(id: string) {
        setForm((prevForm) => ({
            ...prevForm,
            items: prevForm.items.filter((item) => item.id !== id),
        }));
    }

    return {
        form,
        handleChange,
        handleSubmit,
        handleAddItem,
        handleChangeItem,
        handleRemoveItem,
        handleChangeStatus,
    };
}

export default useInvoiceForm;
