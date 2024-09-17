import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles.module.css";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import DropDownContact from "../DropDownContact/DropDownContact";
import { DROPDOWN_MENU } from "../../consts/menu";
import { ADMIN_LIST } from "../../consts/admin";

export default function Navbar({ setVisible, setHidden, cheat }) {
  const [dropDown, setDropDown] = useState(null);

  const handleDropDownVisibility = (index) => {
    setDropDown(index);
  };

  const handleDropDownHidden = () => {
    setVisible();
    setDropDown(null);
  };

  return (
    <nav className={styles.navbar}>
      <section className={styles.navbar__wrapper}>
        <section className={styles.navbar__depth1}>
          <Link to="/">
            <button
              onClick={() => {
                setHidden();
                setDropDown(null);
              }}
              className={styles.menu}
            >
              Main
            </button>
          </Link>
          <button
            onClick={() => {
              if (dropDown === 1) {
                setDropDown(null);
                return;
              }
              handleDropDownVisibility(1);
            }}
            className={styles.menu}
          >
            Admins
          </button>
          <button
            onClick={() => {
              if (dropDown === 2) {
                setDropDown(null);
                return;
              }
              handleDropDownVisibility(2);
            }}
            className={styles.menu}
          >
            Zenput
          </button>
          <button
            onClick={() => {
              if (dropDown === 4) {
                setDropDown(null);
                return;
              }
              handleDropDownVisibility(4);
            }}
            className={styles.menu}
          >
            Contact
          </button>
          {cheat && (
            <button
              onClick={() => {
                if (dropDown === 3) {
                  setDropDown(null);
                  return;
                }
                handleDropDownVisibility(3);
              }}
              className={styles.menu}
            >
              Cheat
            </button>
          )}
        </section>
        {dropDown && dropDown < 4 && (
          <DropDownMenu
            items={DROPDOWN_MENU[dropDown - 1]}
            onItemClick={handleDropDownHidden}
          />
        )}
        {dropDown === 4 && (
          <section className={styles.navbar__depth2__contact}>
            <div className={styles.menu__depth2__contact__hidden} />
            <div className={styles.menu__depth2__contact__hidden} />
            <DropDownContact adminList={ADMIN_LIST} />
          </section>
        )}
      </section>
    </nav>
  );
}
