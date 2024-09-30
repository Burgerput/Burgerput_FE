import React, { useEffect } from "react";
import styles from "../styles.module.css";
import { CustomProduct } from "../../../widgets/custom-product";
import {
  useMachines,
  useResetCustomProducts,
} from "../../../entities/select-products";
import { useSubmitStates, useSubmitActions } from "../../../entities/ui-state";
import { Button } from "../../../shared/ui/Button";
import { Banner } from "../../../shared/ui/Banner";
import { BarSpinner } from "../../../shared/ui/LoadingSpinner";
import { useNavigateToMain } from "../../../shared/lib/hooks";

export default function SelectMachines() {
  const { handleClick } = useNavigateToMain();
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
            {error && <p>{error}</p>}
            {isLoading && <BarSpinner />}
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
          <Button text={"취소"} onClick={handleClick} />
        </div>
      </div>
    </section>
  );
}
