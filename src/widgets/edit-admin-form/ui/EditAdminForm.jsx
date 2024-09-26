import React, { useState } from "react";
import styles from "../styles.module.css";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FORM_FIELD_DATA } from "../consts/form-field-data";
import AdminProfileInput from "./AdminProfileInput";
import { Button } from "../../../shared/ui/Button";
import { useNavigateToMain } from "../../../shared/lib/hooks";

export default function EditAdminForm({ onSubmit, accounts }) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({ mode: "onChange" });

  const [hide, setHide] = useState(true);

  const { handleClick } = useNavigateToMain();

  return (
    <section className={styles.section}>
      <form
        id="inputForm"
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        {FORM_FIELD_DATA.map(
          ({ id, label, defaultValueKey, placeholder, type, validation }) => (
            <AdminProfileInput
              key={id}
              register={register}
              label={label}
              id={id}
              type={id === "password" && hide ? type : "text"}
              defaultValue={accounts[defaultValueKey]}
              placeholder={placeholder}
              validation={validation}
              errors={errors}
            />
          )
        )}
        <button
          type="button"
          className={styles.toggleButton}
          onClick={() => setHide(!hide)}
        >
          {hide ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </button>
      </form>
      <section className={styles.buttons}>
        <Button
          text="저장"
          type="submit"
          form="inputForm"
          disabled={isSubmitting}
        />
        <Button text="취소" onClick={handleClick} />
      </section>
    </section>
  );
}
