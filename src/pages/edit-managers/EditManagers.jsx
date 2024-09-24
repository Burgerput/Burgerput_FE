import { useState } from "react";
import styles from "./styles.module.css";
import { PiTrashBold } from "react-icons/pi";
import { AiOutlineEnter } from "react-icons/ai";
import { useEditManagers } from "../../entities/manager";
import { BarSpinner } from "../../shared/ui/LoadingSpinner";

export default function EditManagers() {
  const [manager, setManager] = useState("");

  const {
    managersQuery: { isLoading, error, data: initialManagers },
    addMgr,
    delMgr,
  } = useEditManagers();

  const handleSubmit = (e) => {
    e.preventDefault();
    addMgr.mutate({ manager });
    setManager("");
  };

  const handleChange = (e) => {
    setManager(e.target.value);
  };

  const handleDelete = (id, mgrname) => {
    delMgr.mutate({ id, mgrname });
  };

  return (
    <section className={styles.section}>
      <header className={styles.title}>관리자 목록 수정</header>
      <ul className={styles.box}>
        {error && <p>{error}</p>}
        {isLoading && <BarSpinner />}
        {initialManagers &&
          initialManagers.map(({ id, mgrname }) => (
            <li className={styles.card} key={id}>
              <p className={styles.card__name}>{mgrname}</p>
              <button
                onClick={() => {
                  handleDelete(id, mgrname);
                }}
                className={styles.cover}
              >
                <PiTrashBold />
              </button>
            </li>
          ))}
      </ul>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={manager}
          onChange={handleChange}
        />
        <button className={styles.button}>
          <AiOutlineEnter />
        </button>
      </form>
    </section>
  );
}
