import React, { useEffect } from "react";
import styles from "./RandomTemp.module.css";
import ManagerList from "../components/ManagerList";
import Banner from "../components/Banner";
import Modal from "../components/Modal";
import {
  useRandomMachineTemp,
  useSaveRandomRange,
  useSubmitRandomRange,
} from "../hooks/RandomTemp";
import RandomTempForm from "../components/RandomTempForm";
import { useSubmitActions, useSubmitStates } from "../store/uiState";

export default function RandomMachineTemp() {
  const { submitCustomTemp, data, setCustomTemp } = useRandomMachineTemp();

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
        <div className={styles.text}>기기 범위</div>
        {data?.mgrList && (
          <ManagerList className={styles.mgrList} mgrList={data.mgrList} />
        )}
      </div>
      {warning && <Banner text={warning} />}
      {success && <Banner text={"지정한 범위를 저장했습니다."} />}
      {loading && (
        <Banner
          type={"loading"}
          text={
            <img
              src="/spinner/spinner.gif"
              width="60%"
              style={{ paddingTop: "2px" }}
            />
          }
        />
      )}
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
      {data?.customCheatMachine && (
        <RandomTempForm
          products={data.customCheatMachine}
          onSaveRandomRange={onSaveRandomRange}
          onSubmitRandomRange={onSubmitRandomRange}
        />
      )}
    </section>
  );
}
