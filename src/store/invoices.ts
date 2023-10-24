import {
  createEntityAdapter,
  createSlice,
  createSelector,
  PayloadAction,
} from "@reduxjs/toolkit";

import { AppState } from "@/store";
import { Invoice } from "@/types/invoice";
import { invoiceToFormMapper } from "@/utils/formMappers";

const invoicesAdapter = createEntityAdapter<Invoice>({
  selectId: (invoice) => invoice.id,
});

const initialState = invoicesAdapter.getInitialState();

export const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    addInvoice: invoicesAdapter.addOne,
    updateInvoice: invoicesAdapter.updateOne,
    removeInvoice: invoicesAdapter.removeOne,
    resetInvoices: () => initialState,
    markInvoiceAsPaid: (state, action: PayloadAction<string>) => {
      const invoice = state.entities[action.payload];

      if (!invoice) return;

      invoice.status = "paid";
    },
  },
});

export const invoicesState = (state: AppState) => state.invoices;

export const selectInvoiceFormStateById = createSelector(
  [invoicesState],
  (invoices) => (id: string) => {
    const invoice = invoices.entities[id];

    if (!invoice) return null;

    return invoiceToFormMapper(invoice);
  }
);

export const {
  selectAll: selectAllInvoices,
  selectById: selectInvoiceById,
  selectTotal: selectTotalInvoices,
} = invoicesAdapter.getSelectors(invoicesState);

export const {
  addInvoice,
  updateInvoice,
  removeInvoice,
  resetInvoices,
  markInvoiceAsPaid,
} = invoicesSlice.actions;

export default invoicesSlice.reducer;
