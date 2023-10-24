import {
  PayloadAction,
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import { AppState } from "@/store";
import {
  PAYMENT_TERM_DEFAULT_VALUE,
  INVOICE_STATUS_DEFAULT_VALUE,
} from "@/components/InvoiceForm/InvoiceForm.const";
import {
  InvoiceForm,
  InvoiceFormType,
  InvoiceFormInititalState,
} from "@/types/invoiceForm";

const invoiceFormAdapter = createEntityAdapter();

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
  paymentDue: new Date().toISOString(),
  paymentTerms: Number(PAYMENT_TERM_DEFAULT_VALUE),
  projectDescription: "",
  items: [],
  status: INVOICE_STATUS_DEFAULT_VALUE,
};

const initialState: InvoiceFormInititalState = {
  state: inititalFormState,
  type: null,
};

export const invoiceFormSlice = createSlice({
  name: "invoiceForm",
  initialState,
  reducers: {
    setInvoiceForm: (state, action: PayloadAction<InvoiceForm>) => {
      state.state = action.payload;
    },
    setInvoiceFormType: (state, action: PayloadAction<InvoiceFormType>) => {
      state.type = action.payload;
    },
    resetInvoiceForm: (state) => {
      state.state = inititalFormState;
      state.type = null;
    },
  },
});

const invoiceFormState = (state: AppState) => state.invoiceForm;

export const selectInvoiceFormState = createSelector(
  [invoiceFormState],
  (invoiceForm) => invoiceForm.state
);

export const selectInvoiceFormType = createSelector(
  [invoiceFormState],
  (invoiceForm) => invoiceForm.type
);

export const { setInvoiceForm, setInvoiceFormType, resetInvoiceForm } =
  invoiceFormSlice.actions;

export default invoiceFormSlice.reducer;
