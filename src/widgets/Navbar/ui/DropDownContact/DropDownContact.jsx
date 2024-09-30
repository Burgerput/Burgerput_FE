import React from "react";
import styles from "../../styles.module.css";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function DropDownContact({ adminList }) {
  return adminList.map(({ name, job }, idx) => (
    <section className={styles.menu__depth2__contact} key={idx}>
      <article className={styles.nameBox}>
        <p className={styles.name}>{name}</p>
        <p className={styles.job}>{job}</p>
      </article>
      <article className={styles.link}>
        <p className={styles.link__icon__git}>
          <FaGithub />
        </p>
        <p className={styles.link__icon__twi}>
          <FaTwitter />
        </p>
        <p className={styles.link__icon__ins}>
          <FaInstagram />
        </p>
      </article>
    </section>
  ));
}
