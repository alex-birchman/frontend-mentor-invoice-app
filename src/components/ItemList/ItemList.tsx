import * as React from "react";
import clsx from "clsx";
import Image from "next/image";

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import useMediaQuery from "@/hooks/useMediaQuery";

import styles from "./ItemList.module.css";
import globalStyles from "@/app/global.module.css";

type Item = {
    id: string;
    name: string;
    qty: number;
    price: number;
    total: number;
};

type ItemProps = Item & {
    onChange: (id: string, param: keyof Item, value: Item[keyof Item]) => void;
    onDelete: (id: string) => void;
};

function Item({ id, name, qty, price, total, onChange, onDelete }: ItemProps) {
    const { isMobile } = useMediaQuery();
    return (
        <div className={styles.item}>
            <InputField
                required
                label={isMobile ? "Item Name" : ""}
                name="item-name"
                type="text"
                value={name}
                onChange={(event) => onChange(id, "name", event.target.value)}
                wrapperClassName={styles.colName}
            />
            <InputField
                required
                label={isMobile ? "Qty." : ""}
                name="item-qty"
                type="number"
                min={1}
                value={qty}
                onChange={(event) =>
                    onChange(id, "qty", Number(event.target.value))
                }
                wrapperClassName={styles.colQty}
                className={styles.itemColNumber}
            />
            <InputField
                required
                label={isMobile ? "Price" : ""}
                name="item-price"
                type="number"
                min={0}
                step={0.01}
                value={price}
                onChange={(event) =>
                    onChange(id, "price", Number(event.target.value))
                }
                wrapperClassName={styles.colPrice}
                className={styles.itemColNumber}
            />
            <div className={clsx(styles.colTotal, styles.itemTotal)}>
                <span
                    className={clsx(
                        globalStyles.textSizeBody,
                        styles.itemTotalTitle
                    )}
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

function ItemList() {
    const [items, setItems] = React.useState<Item[]>([]);

    function handleAddItem() {
        const nextItems = [...items];
        nextItems.push({
            id: crypto.randomUUID(),
            name: "",
            qty: 1,
            price: 0,
            total: 0,
        });
        setItems(nextItems);
    }

    function handleRemoveItem(id: string) {
        const nextItems = items.filter((item) => item.id !== id);
        setItems(nextItems);
    }

    function handleChangeItem<K extends keyof Item>(
        id: string,
        param: K,
        value: Item[K]
    ) {
        const nextItems = [...items];
        const findItem = nextItems.find((item) => item.id === id);

        if (!findItem) return;

        findItem[param] = (value + "") as Item[K];

        findItem.total = findItem.qty * findItem.price;
        setItems(nextItems);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.table}>
                <div
                    className={clsx(
                        globalStyles.textSizeBody,
                        styles.tableHeader
                    )}
                >
                    <span className={styles.colName}>Item Name</span>
                    <span className={styles.colQty}>Qty.</span>
                    <span className={styles.colPrice}>Price</span>
                    <span className={styles.colTotal}>Total</span>
                </div>
                <div className={styles.tableBody}>
                    {items.map((item) => (
                        <Item
                            key={item.id}
                            onChange={handleChangeItem}
                            onDelete={handleRemoveItem}
                            {...item}
                        />
                    ))}
                </div>
            </div>
            <Button type="button" styleType="tertiary" onClick={handleAddItem}>
                + Add New Item
            </Button>
        </div>
    );
}

export default ItemList;
