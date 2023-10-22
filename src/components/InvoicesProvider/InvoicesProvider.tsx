"use client";

import * as React from "react";
import { DateTime } from "luxon";

import {
  Invoice,
  InvoiceForm,
  InvoiceFormSubmit,
  InvoiceItem,
} from "@/types/invoice";
import { invoiceFormMapper } from "@/utils/formMappers";

type InvoiceContextData = {
  invoices: InvoiceItem[];
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
  const [invoices, setInvoices] = React.useState<InvoiceItem[]>([]);

  function handleCreateInvoice(form: InvoiceForm) {
    const nextInvoices = [...invoices];

    const id = "XR1923";
    const createdAt = DateTime.now().toISODate();
    const paymentDue = DateTime.fromJSDate(form.paymentDue).toISODate();
    const total = form.items.reduce((acc, item) => {
      return acc + item.total;
    }, 0);

    const invoiceFormToSubmit: InvoiceFormSubmit = {
      ...form,
      id,
      createdAt,
      paymentDue,
      total,
    };

    const invoice: Invoice = invoiceFormMapper(invoiceFormToSubmit);

    const invoiceItem: InvoiceItem = {
      ...invoice,
      paymentDue: invoice.paymentDue
        ? DateTime.fromISO(invoice.paymentDue).toFormat("dd MMM yyyy")
        : undefined,
      createdAt: invoice.createdAt
        ? DateTime.fromISO(invoice.createdAt).toFormat("dd MMM yyyy")
        : undefined,
    };

    console.log(invoiceItem);

    nextInvoices.push(invoiceItem);

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
