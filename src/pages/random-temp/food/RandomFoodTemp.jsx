import React, { useEffect } from "react";
import styles from "../styles.module.css";
import { SelectManager } from "../../../features/select-manager";
import { RandomTempForm } from "../../../widgets/random-temp-form";
import { ErrorAlert, SuccessAlert } from "../../../features/alert";
import {
  useRandomFoodTemp,
  useSaveRandomRange,
  useSubmitRandomRange,
} from "../../../entities/custom-products/random-temp";
import { useSubmitActions, useSubmitStates } from "../../../entities/ui-state";
import { useModalWithTemp } from "../../../shared/lib/hooks";
import { Modal } from "../../../shared/ui/Modal";
import { Banner } from "../../../shared/ui/Banner";
import { BarSpinner, PacmanSpinner } from "../../../shared/ui/LoadingSpinner";

export default function RandomFoodTemp() {
  const { submitCustomTemp, data, isLoading, setCustomTemp } =
    useRandomFoodTemp();

  const { onSubmitRandomRange, handleRetrySubmit } = useSubmitRandomRange({
    submitCustomTemp,
  });

  const { onSaveRandomRange } = useSaveRandomRange({ setCustomTemp });

  const { loading, warning, success, result } = useSubmitStates();
  const { resetState } = useSubmitActions();

  const { handleModalClose, handleRetry } = useModalWithTemp(handleRetrySubmit);

  useEffect(() => {
    return () => {
      resetState();
    };
  }, [resetState]);

  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <div className={styles.text}>식품 범위</div>
        {data?.mgrList && (
          <SelectManager className={styles.mgrList} mgrList={data.mgrList} />
        )}
      </div>
      {warning && <Banner text={warning} />}
      {success && <Banner text={"지정한 범위를 저장했습니다."} />}
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
      {data?.customCheatFood && (
        <RandomTempForm
          products={data.customCheatFood}
          onSaveRandomRange={onSaveRandomRange}
          onSubmitRandomRange={onSubmitRandomRange}
        />
      )}
    </section>
  );
}
