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
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: InvoiceStatusType;
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
  total: number;
}

export interface InvoiceFormItem extends Item {
  id: string;
}

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
  paymentDue: string;
  paymentTerms: number;
  projectDescription: string;
  items: InvoiceFormItem[];
  status: InvoiceStatusType;
}

export interface InvoiceFormSubmit extends InvoiceForm {
  id: string;
  createdAt: string;
  total: number;
}

export interface InvoiceFormValidation {
  items: string | null;
}
