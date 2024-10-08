import React, { useEffect, useState } from "react";
import styles from "../../styles.module.css";
import EditItem from "../EditItem/EditItem";
import AddedOrRemovedItem from "../AddedOrRemovedItem/AddedOrRemovedItem";
import { useQuery } from "@tanstack/react-query";
import { getDiffValue } from "../../model";

export default function UpdatedValueChecker() {
  const [showOverlay, setShowOverlay] = useState(true);

  const { data: diffValue } = useQuery(["diffValue"], () => getDiffValue());

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {diffValue?.length > 0 && (
        <>
          {showOverlay && <div className={styles.overlay} />}
          <section className={styles.section}>
            <h2 className={styles.title}>👀 확인해주세요 👀</h2>
            <ul className={styles.list}>
              {diffValue.map((item) => {
                const Component =
                  item.code === "edit" ? EditItem : AddedOrRemovedItem;
                const props =
                  item.code === "edit" ? { item } : { item, type: item.code };

                return <Component key={item.id} {...props} />;
              })}
            </ul>
          </section>
        </>
      )}
    </>
  );
}
