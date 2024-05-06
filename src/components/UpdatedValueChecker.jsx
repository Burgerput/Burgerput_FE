import React, { useEffect, useState } from "react";
import { getDiffValue } from "../api/Products";
import styles from "./UpdatedValueChecker.module.css";
import EditItem from "./ui/diffValues/EditItem";
import AddedOrRemovedItem from "./ui/diffValues/AddedOrRemovedItem";

export default function UpdatedValueChecker() {
  const [diffValue, setDiffValue] = useState();

  useEffect(() => {
    getDiffValue().then((data) => setDiffValue(data));
  }, []);

  return (
    <section className={styles.section}>
      {diffValue &&
        diffValue.map((item) => {
          const Component =
            item.code === "edit" ? EditItem : AddedOrRemovedItem;
          const props =
            item.code === "edit" ? { item } : { item, type: item.code };

          return <Component key={item.id} {...props} />;
        })}
    </section>
  );
}
