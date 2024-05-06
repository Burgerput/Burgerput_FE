import React, { useEffect, useState } from "react";
import { getDiffValue } from "../api/Products";
import styles from "./UpdatedValueChecker.module.css";
import AddItem from "./ui/diffValues/AddItem";
import DeleteItem from "./ui/diffValues/DeleteItem";
import EditItem from "./ui/diffValues/EditItem";

function DefaultComponent() {
  return <li>Unknown type error</li>;
}

export default function UpdatedValueChecker() {
  const [diffValue, setDiffValue] = useState();

  useEffect(() => {
    getDiffValue().then((data) => setDiffValue(data));
  }, []);

  const ComponentMap = {
    add: AddItem,
    del: DeleteItem,
    edit: EditItem,
  };

  return (
    <section className={styles.section}>
      {diffValue &&
        diffValue.map((item) => {
          const Component = ComponentMap[item.code] || DefaultComponent;

          return <Component key={item.id} item={item} />;
        })}
    </section>
  );
}
