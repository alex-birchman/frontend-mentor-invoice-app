import { InvoiceFormSubmit, Invoice } from "@/types/invoice";

export function invoiceFormMapper(form: InvoiceFormSubmit): Invoice {
  return {
    id: form.id,
    status: form.status,
    createdAt: form.createdAt,
    senderAddress: {
      street: form.senderAddressStreet,
      city: form.senderAddressCity,
      postCode: form.senderAddressPostCode,
      country: form.senderAddressCountry,
    },
    clientAddress: {
      street: form.clientAddressStreet,
      city: form.clientAddressCity,
      postCode: form.clientAddressPostCode,
      country: form.clientAddressCountry,
    },
    clientName: form.clientName,
    clientEmail: form.clientEmail,
    paymentDue: form.paymentDue,
    description: form.projectDescription,
    paymentTerms: form.paymentTerms,
    items: form.items,
  };
}
