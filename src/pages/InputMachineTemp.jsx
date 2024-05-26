import React, { useEffect } from "react";
import Banner from "../components/Banner";
import ManagerList from "../components/ManagerList";
import Button from "../components/Button";
import styles from "./InputTemp.module.css";
import Modal from "../components/Modal";
import { useGoHome } from "../hooks/useNavigator";
import { useCustomMachines, useCustomProducts } from "../hooks/customProducts";
import { useSubmitActions, useSubmitStates } from "../store/uiState";
import InputTempForm from "../components/InputTempForm";

export default function InputMachineTemp() {
  const { handleClick } = useGoHome();

  const { warning, loading, result } = useSubmitStates();
  const { resetState } = useSubmitActions();

  const {
    productsQuery: { isLoading, error, data },
    setProductsTemp,
  } = useCustomMachines();

  const { onSubmit, handleRetrySubmit } = useCustomProducts({
    setProductsTemp,
  });

  useEffect(() => {
    return () => {
      resetState();
    };
  }, [resetState]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <section className={styles.section}>
        <div className={styles.title}>
          <div className={styles.text}>기기 입력</div>
          {data?.mgrList && (
            <ManagerList className={styles.mgrList} mgrList={data.mgrList} />
          )}
        </div>
        {warning && <Banner text={"매니저를 선택해주세요."} />}
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
        {data?.customMachine && (
          <InputTempForm onSubmit={onSubmit} products={data.customMachine} />
        )}
        <div className={styles.buttons}>
          <Button text={"저장"} type={"submit"} form={"inputForm"} />
          <Button text={"취소"} handleFunction={handleClick} />
        </div>
      </section>
    </>
  );
}
