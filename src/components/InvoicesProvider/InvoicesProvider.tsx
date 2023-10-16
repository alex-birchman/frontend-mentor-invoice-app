"use client";

import * as React from "react";

import { Invoice, InvoiceForm, InvoiceFormSubmit } from "@/types/invoice";
import { invoiceFormMapper } from "@/utils/formMappers";

type InvoiceContextData = {
    invoices: Invoice[];
    handleCreateInvoice: (form: InvoiceForm) => void;
};

const initialContextData: InvoiceContextData = {
    invoices: [],
    handleCreateInvoice: () => {},
};

const InvoicesContext =
    React.createContext<InvoiceContextData>(initialContextData);

export const useInvoices = () => React.useContext(InvoicesContext);

function InvoicesProvider({ children }: React.PropsWithChildren<{}>) {
    const [invoices, setInvoices] = React.useState<Invoice[]>([]);

    function handleCreateInvoice(form: InvoiceForm) {
        const nextInvoices = [...invoices];

        const id = "XR1923";
        const createdAt = new Date().toISOString();
        const total = form.items.reduce((acc, item) => {
            return acc + item.total;
        }, 0);

        const invoiceFormToSubmit: InvoiceFormSubmit = {
            ...form,
            id,
            createdAt,
            total,
        };

        const invoice: Invoice = invoiceFormMapper(invoiceFormToSubmit);

        nextInvoices.push(invoice);

        setInvoices(nextInvoices);
    }

    return (
        <InvoicesContext.Provider
            value={{
                invoices,
                handleCreateInvoice,
            }}
        >
            {children}
        </InvoicesContext.Provider>
    );
}

export default InvoicesProvider;
