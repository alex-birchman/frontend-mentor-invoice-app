export type SidebarContentView = "invoiceForm";

export type SidebarInitialState = {
  isOpen: boolean;
  contentView: SidebarContentView | null;
};
