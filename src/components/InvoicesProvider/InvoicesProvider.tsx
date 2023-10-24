"use client";

import * as React from "react";
import { DateTime } from "luxon";

import { Invoice } from "@/types/invoice";
import { InvoiceForm, InvoiceFormSubmit } from "@/types/invoiceForm";
import { invoiceFromFormMapper } from "@/utils/formMappers";

type InvoiceContextData = {
  invoices: Invoice[];
  handleCreateInvoice: (form: InvoiceForm) => void;
  getInvoiceById: (id: string) => Invoice | undefined;
};

const initialContextData: InvoiceContextData = {
  invoices: [],
  handleCreateInvoice: () => {},
  getInvoiceById: () => undefined,
};

const InvoicesContext =
  React.createContext<InvoiceContextData>(initialContextData);

export const useInvoices = () => React.useContext(InvoicesContext);

function InvoicesProvider({ children }: React.PropsWithChildren<{}>) {
  const [invoices, setInvoices] = React.useState<Invoice[]>([]);

  function handleCreateInvoice(form: InvoiceForm) {
    const nextInvoices = [...invoices];

    const id = "XR1923";
    const createdAt = DateTime.now().toJSDate();

    const invoiceFormToSubmit: InvoiceFormSubmit = {
      id,
      createdAt,
      ...form,
    };

    const invoice = invoiceFromFormMapper(invoiceFormToSubmit);
    nextInvoices.push(invoice);

    setInvoices(nextInvoices);
  }

  function getInvoiceById(id: string) {
    return invoices.find((invoice) => invoice.id === id);
  }

  return (
    <InvoicesContext.Provider
      value={{
        invoices,
        handleCreateInvoice,
        getInvoiceById,
      }}
    >
      {children}
    </InvoicesContext.Provider>
  );
}

export default InvoicesProvider;
