import * as React from "react";
import clsx from "clsx";

import { Item } from "@/types/invoice";

import styles from "./InvoiceDetailItems.module.css";
import globalStyles from "@/app/global.module.css";

type InvoiceDetailItemsProps = {
  items: Item[];
};

function InvoiceDetailItems({ items }: InvoiceDetailItemsProps) {
  const itemsTotal = items.reduce((acc, item) => acc + item.total, 0);

  const formattedItemsTotal = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(itemsTotal);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={clsx(globalStyles.textSizeBody, styles.header)}>
          <div className={styles.itemName}>Item Name</div>
          <div className={styles.quantity}>QTY.</div>
          <div className={styles.price}>Price</div>
          <div className={styles.total}>Total</div>
        </div>
        <ul className={styles.items}>
          {items.map((item) => {
            const formattedPrice = new Intl.NumberFormat("en-GB", {
              style: "currency",
              currency: "GBP",
            }).format(item.price);
            const formattedTotal = new Intl.NumberFormat("en-GB", {
              style: "currency",
              currency: "GBP",
            }).format(item.total);

            return (
              <li
                key={item.id}
                className={clsx(globalStyles.textSizeS, styles.item)}
              >
                <div className={styles.nameAndQuantityPrice}>
                  <div className={styles.itemName}>{item.name}</div>
                  <div className={styles.itemQuantityAndPrice}>
                    {item.quantity} x {formattedPrice}
                  </div>
                </div>
                <div className={styles.itemQuantity}>{item.quantity}</div>
                <div className={styles.itemPrice}>{formattedPrice}</div>
                <div className={styles.itemTotal}>{formattedTotal}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.footer}>
        <div className={clsx(globalStyles.textSizeBody)}>Amount Due</div>
        <div className={clsx(globalStyles.textSizeM, styles.footerTotal)}>
          {formattedItemsTotal}
        </div>
      </div>
    </div>
  );
}

export default InvoiceDetailItems;
