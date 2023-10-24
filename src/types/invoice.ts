export type InvoiceStatusType = "paid" | "pending" | "draft";

export interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface Item {
  id?: string;
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Invoice {
  id: string;
  createdAt: Date | string;
  paymentDue: Date | string;
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
