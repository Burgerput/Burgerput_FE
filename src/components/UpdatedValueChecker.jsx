import React, { useEffect, useState } from "react";
import { getDiffValue } from "../api/Products";
import styles from "./UpdatedValueChecker.module.css";

export default function UpdatedValueChecker() {
  const [diffValue, setDiffValue] = useState();

  useEffect(() => {
    getDiffValue().then((data) => setDiffValue(data));
  }, []);

  console.log(diffValue);
  return <section className={styles.section}></section>;
}
