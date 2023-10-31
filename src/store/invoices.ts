import {
  createEntityAdapter,
  createSlice,
  createSelector,
  PayloadAction,
} from "@reduxjs/toolkit";

import { AppState } from "@/store";
import { Invoice } from "@/types/invoice";
import { invoiceToFormMapper } from "@/utils/formMappers";

export type InvoicesFilters = "draft" | "pending" | "paid";

type InvoicesFiltersState = Record<InvoicesFilters, boolean>;

type InvoicesState = {
  filters: InvoicesFiltersState;
};

type toggleInvoicesFilterPayload = {
  filter: InvoicesFilters;
  value: boolean;
};

const invoicesAdapter = createEntityAdapter<Invoice>({
  selectId: (invoice) => invoice.id,
});

const initialState = invoicesAdapter.getInitialState<InvoicesState>({
  filters: {
    draft: false,
    pending: false,
    paid: false,
  },
});

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
    toggleInvoicesFilter: (
      state,
      action: PayloadAction<toggleInvoicesFilterPayload>
    ) => {
      const { filter, value } = action.payload;
      state.filters[filter] = value;
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

export const selectInvoicesFilters = createSelector(
  [invoicesState],
  (invoices) => invoices.filters
);

export const selectSelectedInvoicesFilters = createSelector(
  [selectInvoicesFilters],
  (filters) =>
    Object.keys(filters).filter((filter) => filters[filter as InvoicesFilters])
);

export const selectSelectedCountFilter = createSelector(
  [selectSelectedInvoicesFilters],
  (filters) => filters.length
);

export const {
  selectAll: selectAllInvoices,
  selectById: selectInvoiceById,
  selectTotal: selectTotalInvoices,
} = invoicesAdapter.getSelectors(invoicesState);

export const selectInvoicesByFilters = createSelector(
  [selectAllInvoices, selectSelectedInvoicesFilters],
  (invoices, selectedFilters) => {
    if (selectedFilters.length === 0) return invoices;

    return invoices.filter((invoice) =>
      selectedFilters.includes(invoice.status)
    );
  }
);

export const {
  addInvoice,
  updateInvoice,
  removeInvoice,
  resetInvoices,
  markInvoiceAsPaid,
  toggleInvoicesFilter,
} = invoicesSlice.actions;

export default invoicesSlice.reducer;
