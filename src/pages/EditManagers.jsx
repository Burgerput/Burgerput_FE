import styles from "./EditManagers.module.css";
import { PiTrashBold } from "react-icons/pi";
import { RiArrowGoBackFill } from "react-icons/ri";
import { AiOutlineEnter } from "react-icons/ai";
import { useGoHome } from "../hooks/useNavigator";
import { useState } from "react";
import { useEditManagers } from "../hooks/Admins";

export default function EditManagers() {
  const [manager, setManager] = useState("");

  const { handleClick } = useGoHome();
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
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {initialManagers && (
        <section className={styles.section}>
          <div className={styles.header}>
            <div className={styles.title}>관리자 목록 수정</div>
            <RiArrowGoBackFill
              className={styles.header__button}
              onClick={handleClick}
            />
          </div>

          <ul className={styles.box}>
            {initialManagers.map(({ id, mgrname }) => (
              <li className={styles.card} key={id}>
                <span className={styles.card__name}>{mgrname}</span>
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
      )}
    </>
  );
}
