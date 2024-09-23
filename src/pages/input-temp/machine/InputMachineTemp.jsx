import React, { useEffect } from "react";
import styles from "../styles.module.css";
import { InputTempForm } from "../../../widgets/input-temp-form";
import { SelectManager } from "../../../features/select-manager";
import { ErrorAlert, SuccessAlert } from "../../../features/alert/";
import {
  useCustomMachines,
  useCustomProducts,
} from "../../../entities/custom-products/input-temp";
import { useSubmitActions, useSubmitStates } from "../../../entities/ui-state";
import { useModalWithTemp, useNavigateToMain } from "../../../shared/lib/hooks";
import { Modal } from "../../../shared/ui/Modal";
import { Banner } from "../../../shared/ui/Banner";
import { Button } from "../../../shared/ui/Button";
import { BarSpinner, PacmanSpinner } from "../../../shared/ui/LoadingSpinner";

export default function InputMachineTemp() {
  const { handleClick } = useNavigateToMain();

  const { warning, loading, result } = useSubmitStates();
  const { resetState } = useSubmitActions();

  const {
    productsQuery: { isLoading, error, data },
    setProductsTemp,
  } = useCustomMachines();

  const { onSubmit, handleRetrySubmit } = useCustomProducts({
    setProductsTemp,
  });

  const { handleModalClose, handleRetry } = useModalWithTemp(handleRetrySubmit);

  useEffect(() => {
    return () => {
      resetState();
    };
  }, [resetState]);

  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <div className={styles.text}>기기 입력</div>
        {data?.mgrList && (
          <SelectManager className={styles.mgrList} mgrList={data.mgrList} />
        )}
      </div>
      {warning && <Banner text={"매니저를 선택해주세요."} />}
      {loading && <PacmanSpinner />}
      {result.result === "true" && (
        <Modal onClose={handleModalClose}>
          <SuccessAlert handleClose={handleModalClose} />
        </Modal>
      )}
      {result.result === "error" && (
        <Modal onClose={handleModalClose}>
          <ErrorAlert
            handleRetry={handleRetry}
            handleClose={handleModalClose}
          />
        </Modal>
      )}
      {isLoading && <BarSpinner />}
      {data?.customMachine && (
        <InputTempForm
          onSubmit={onSubmit}
          products={data.customMachine}
          pageLocation={"machines"}
        />
      )}
      <div className={styles.buttons}>
        <Button text={"저장"} type={"submit"} form={"inputForm"} />
        <Button text={"취소"} onClick={handleClick} />
      </div>
    </section>
  );
}
