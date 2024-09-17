import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles.module.css";

export default function DropDownMenu({ items, onItemClick }) {
  return (
    <section className={styles.navbar__depth2}>
      {items.map(({ label, to, state }, idx) => {
        if (label === "hidden")
          return (
            <div className={styles.menu__depth2__contact__hidden} key={idx} />
          );

        return (
          <Link to={to} state={state} key={idx}>
            <button className={styles.menu__depth2} onClick={onItemClick}>
              {label}
            </button>
          </Link>
        );
      })}
    </section>
  );
}
