import { Invoice } from "@/types/invoice";
import { InvoiceForm, InvoiceFormSubmit } from "@/types/invoiceForm";

export function invoiceFromFormMapper(form: InvoiceFormSubmit): Invoice {
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
    total: form.total,
  };
}

export function invoiceToFormMapper(invoice: Invoice): InvoiceForm {
  return {
    id: invoice.id,
    status: invoice.status,
    createdAt: invoice.createdAt,
    senderAddressStreet: invoice.senderAddress.street,
    senderAddressCity: invoice.senderAddress.city,
    senderAddressPostCode: invoice.senderAddress.postCode,
    senderAddressCountry: invoice.senderAddress.country,
    clientName: invoice.clientName,
    clientEmail: invoice.clientEmail,
    clientAddressStreet: invoice.clientAddress.street,
    clientAddressCity: invoice.clientAddress.city,
    clientAddressPostCode: invoice.clientAddress.postCode,
    clientAddressCountry: invoice.clientAddress.country,
    paymentDue: invoice.paymentDue,
    paymentTerms: invoice.paymentTerms,
    projectDescription: invoice.description,
    items: invoice.items.map((item) => ({
      id: crypto.randomUUID(),
      ...item,
    })),
  };
}
