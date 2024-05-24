import React, { useEffect, useState } from "react";
import styles from "./RandomTemp.module.css";
import SetTemp from "../components/SetTemp";
import ManagerList from "../components/ManagerList";
import Banner from "../components/Banner";
import Modal from "../components/Modal";
import { useRandomMachineTemp } from "../hooks/RandomTemp";
import RandomTempForm from "../components/RandomTempForm";
import {
  useHandleWaring,
  useLoading,
  useResult,
  useSetLoading,
  useSetResult,
  useSuccess,
  useWarning,
} from "../store/uiState";
import { useManagerState } from "../store/manager";

export default function RandomMachineTemp() {
  const { submitCustomTemp, data, setCustomTemp } = useRandomMachineTemp();
  const [submissionData, setSubmissionData] = useState(null);
  const manager = useManagerState();

  const result = useResult();
  const loading = useLoading();
  const warning = useWarning();
  const success = useSuccess();

  const handleWarning = useHandleWaring();
  const setLoading = useSetLoading();
  const setResult = useSetResult();

  const onSaveRandomRange = (products) => {
    const hasDisabled = products.some((product) => product.min === 999);

    if (hasDisabled) {
      handleWarning(1500, "결품 범위는 저장할 수 없습니다.");
      return;
    }

    setCustomTemp.mutate({ products });
  };

  const onSubmitRandomRange = (products, time) => {
    if (manager === null || manager.length === 0) {
      handleWarning(1500, "매니저를 선택해주세요.");
      return;
    }

    const submissionPayload = { manager, products, time };

    setSubmissionData(submissionPayload);
    setLoading(true);

    submitCustomTemp(submissionPayload)
      .then((res) => setResult(res.data))
      .finally(() => setLoading(false))
      .catch((error) => {
        console.error(error);
        setResult("error");
      });
  };

  const handleRetrySubmit = () => {
    if (!submissionData) return;

    setLoading(true);
    submitCustomTemp(submissionData)
      .then((res) => setResult(res.data))
      .finally(() => setLoading(false))
      .catch((error) => {
        console.error(error);
        setResult("error");
      });
  };

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
      {result.result === "true" && (
        <Modal title={"제출"} component={"값을 정상적으로 제출했습니다."} />
      )}
      {result === "error" && (
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
