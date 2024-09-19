import React, { useEffect } from "react";
import styles from "./RandomTemp.module.css";
import Modal from "../components/Modal";
import {
  useRandomFoodTemp,
  useSaveRandomRange,
  useSubmitRandomRange,
} from "../hooks/RandomTemp";
import { useSubmitActions, useSubmitStates } from "../store/uiState";
import RandomTempForm from "../components/RandomTempForm";
import { SelectManager } from "../features/select-manager";
import { BarSpinner, PacmanSpinner } from "../shared/ui/LoadingSpinner";
import { Banner } from "../shared/ui/Banner";

export default function RandomFoodTemp() {
  const { submitCustomTemp, data, isLoading, setCustomTemp } =
    useRandomFoodTemp();

  const { onSubmitRandomRange, handleRetrySubmit } = useSubmitRandomRange({
    submitCustomTemp,
  });

  const { onSaveRandomRange } = useSaveRandomRange({ setCustomTemp });

  const { loading, warning, success, result } = useSubmitStates();

  const { resetState } = useSubmitActions();

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
      {result && result.result === "true" && (
        <Modal title={"제출"} component={"값을 정상적으로 제출했습니다."} />
      )}
      {result && result === "error" && (
        <Modal
          title={"에러 발생"}
          error={true}
          submit={handleRetrySubmit}
          component={"입력에 실패했습니다. 다시 시도해주세요."}
        />
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
