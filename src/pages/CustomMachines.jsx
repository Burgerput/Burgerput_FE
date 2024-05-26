import React, { useEffect } from "react";
import CustomProduct from "../components/CustomProduct";
import styles from "./CustomPage.module.css";
import Banner from "./../components/Banner";
import Button from "../components/Button";
import { useGoHome } from "../hooks/useNavigator";
import { useMachines } from "../hooks/products";
import { useSubmitActions, useSubmitStates } from "../store/uiState";
import { useResetCustomProducts } from "../store/products";

export default function CustomMachines() {
  const { handleClick } = useGoHome();
  const { success } = useSubmitStates();
  const { resetState } = useSubmitActions();

  const {
    productsQuery: { isLoading, error, data: machines },
    handleSubmitProducts,
  } = useMachines();

  const resetProducts = useResetCustomProducts();

  useEffect(() => {
    return () => {
      resetProducts();
      resetState();
    };
  }, [resetProducts, resetState]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {machines && (
        <section className={styles.section}>
          <div className={styles.title}>기기 선택</div>
          <div className={styles.wrapper}>
            <form
              id="customMachine"
              className={styles.form}
              onSubmit={handleSubmitProducts}
            >
              {success && <Banner text={"기기 선택이 완료되었습니다."} />}
              <div className={styles.products}>
                {machines &&
                  machines.map((machine) => (
                    <div key={machine.id}>
                      <CustomProduct
                        value={machine}
                        checkedIt={machine.isChecked === "true" ? true : false}
                      />
                    </div>
                  ))}
              </div>
            </form>
            <div className={styles.buttons}>
              <Button text={"저장"} type={"submit"} form={"customMachine"} />
              <Button text={"취소"} handleFunction={handleClick} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
