import * as React from "react";
import clsx from "clsx";
import Image from "next/image";

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import useMediaQuery from "@/hooks/useMediaQuery";
import { InvoiceFormItem } from "@/types/invoiceForm";

import styles from "./ItemList.module.css";
import globalStyles from "@/app/global.module.css";

type ItemProps = InvoiceFormItem & {
  onChange: (
    id: string,
    param: keyof InvoiceFormItem,
    value: InvoiceFormItem[keyof InvoiceFormItem],
    total?: number
  ) => void;
  onDelete: (id: string) => void;
};

function Item({
  id,
  name,
  quantity,
  price,
  total,
  onChange,
  onDelete,
}: ItemProps) {
  const { isMobile } = useMediaQuery();

  return (
    <div className={styles.item}>
      <InputField
        required
        label={isMobile ? "Item Name" : ""}
        name={`item-name#${id}`}
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(event) => {
          onChange(id, "name", event.target.value);
        }}
        wrapperClassName={styles.colName}
      />
      <InputField
        required
        label={isMobile ? "Qty." : ""}
        name={`item-quantity#${id}`}
        type="number"
        min={1}
        value={quantity}
        onChange={(event) => {
          const total = Number(event.target.value) * Number(price);
          onChange(id, "quantity", event.target.value, total);
        }}
        wrapperClassName={styles.colQty}
        className={styles.itemColNumber}
      />
      <InputField
        required
        label={isMobile ? "Price" : ""}
        name={`item-price#${id}`}
        type="number"
        min={0}
        step={0.01}
        value={price}
        onChange={(event) => {
          const total = Number(event.target.value) * Number(quantity);
          onChange(id, "price", event.target.value, total);
        }}
        wrapperClassName={styles.colPrice}
        className={styles.itemColNumber}
      />
      <div className={clsx(styles.colTotal, styles.itemTotal)}>
        <span
          className={clsx(globalStyles.textSizeBody, styles.itemTotalTitle)}
        >
          Total
        </span>
        <p
          className={clsx(
            globalStyles.textSizeS2,
            styles.itemColTotal,
            styles.itemTotalContent
          )}
        >
          {Number(total).toFixed(2)}
        </p>
      </div>
      <button
        type="button"
        className={clsx(styles.colAction, styles.trashButton)}
        onClick={() => onDelete(id)}
      >
        <Image
          src="/icon-trash.svg"
          alt="Icon trash can"
          width={13}
          height={16}
          className={styles.trashIcon}
        />
      </button>
    </div>
  );
}

type ItemListProps = {
  items: InvoiceFormItem[];
  onChange: (
    id: string,
    param: keyof InvoiceFormItem,
    value: InvoiceFormItem[keyof InvoiceFormItem],
    total?: number
  ) => void;
  onDelete: (id: string) => void;
  onAdd: () => void;
};

function ItemList({ items, onChange, onDelete, onAdd }: ItemListProps) {
  return (
    <>
      <div className={clsx(globalStyles.textSizeBody, styles.header)}>
        <span className={styles.colName}>Item Name</span>
        <span className={styles.colQty}>Qty.</span>
        <span className={styles.colPrice}>Price</span>
        <span className={styles.colTotal}>Total</span>
      </div>
      {items.map((item) => (
        <Item key={item.id} onChange={onChange} onDelete={onDelete} {...item} />
      ))}
      <Button
        type="button"
        styleType="tertiary"
        className={styles.addNewItemButton}
        onClick={onAdd}
      >
        + Add New Item
      </Button>
    </>
  );
}

export default ItemList;
