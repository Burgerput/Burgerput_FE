import React from "react";
import CreatableSelect from "react-select/creatable";
import styles from "./ManagerList.module.css";
import useCustomStyles from "../hooks/managerList";
import { useManagerState, useSetManager } from "../store/manager";

export default function ManagerList({ mgrList }) {
  const manager = useManagerState();
  const setManager = useSetManager();

  const { customStyles } = useCustomStyles();
  const options = mgrList.map(({ id, mgrname }) => ({
    value: id,
    label: mgrname,
  }));

  const handleChange = (e) => {
    if (e.value === "직접입력") {
      setManager("");
    } else {
      setManager(e);
    }
  };

  return (
    <div className={styles.box}>
      <CreatableSelect
        className={styles.select}
        placeholder={manager === "" ? "입력" : "관리자 선택"}
        options={[...options, { value: "직접입력", label: "직접 입력" }]}
        onChange={handleChange}
        value={manager}
        styles={customStyles}
        formatCreateLabel={(inputValue) => inputValue}
      />
    </div>
  );
}
