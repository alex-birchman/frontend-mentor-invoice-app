import { Item, InvoiceStatusType } from "@/types/invoice";

export interface InvoiceFormItem extends Item {
  id: string;
}

export type InvoiceFormType = "create" | "edit";

export interface InvoiceForm {
  id?: string;
  createdAt?: Date | string;
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
  paymentDue: Date | string;
  paymentTerms: number;
  projectDescription: string;
  items: InvoiceFormItem[];
  status: InvoiceStatusType;
}

export interface InvoiceFormSubmit extends InvoiceForm {
  id: string;
  createdAt: Date | string;
  total: number;
}

export interface InvoiceFormValidation {
  items: string | null;
}

export type InvoiceFormInititalState = {
  state: InvoiceForm;
  type: InvoiceFormType | null;
};
