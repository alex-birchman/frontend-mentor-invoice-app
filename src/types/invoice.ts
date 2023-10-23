export type InvoiceStatusType = "paid" | "pending" | "draft";

export interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Invoice {
  id: string;
  createdAt: Date;
  paymentDue: Date;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: InvoiceStatusType;
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
}

export interface InvoiceFormItem extends Item {
  id: string;
}

export type InvoiceFormType = "create" | "edit";

export interface InvoiceForm {
  senderAddressStreet: string;
  senderAddressCity: string;
  senderAddressPostCode: string;
  senderAddressCountry: string;
  clientName: string;
  clientEmail: string;
  clientAddressStreet: string;
  clientAddressCity: string;
  clientAddressPostCode: string;
  clientAddressCountry: string;
  paymentDue: Date;
  paymentTerms: number;
  projectDescription: string;
  items: InvoiceFormItem[];
  status: InvoiceStatusType;
}

export interface InvoiceFormSubmit extends InvoiceForm {
  id: string;
  createdAt: Date;
}

export interface InvoiceFormValidation {
  items: string | null;
}
