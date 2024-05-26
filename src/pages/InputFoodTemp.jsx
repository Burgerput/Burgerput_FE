import React, { useEffect } from "react";
import Banner from "../components/Banner";
import ManagerList from "../components/ManagerList";
import Button from "../components/Button";
import styles from "./InputTemp.module.css";
import Modal from "../components/Modal";
import { useGoHome } from "../hooks/useNavigator";
import { useCustomFoods, useCustomProducts } from "../hooks/customProducts";
import { useSubmitActions, useSubmitStates } from "../store/uiState";
import InputTempForm from "../components/InputTempForm";
import LoadingBarSpinner from "../components/ui/LoadingBarSpinner";
import PacmanSpinner from "../components/ui/PacmanSpinner";

export default function InputFoodTemp() {
  const { handleClick } = useGoHome();

  const { warning, loading, result } = useSubmitStates();
  const { resetState } = useSubmitActions();

  const {
    productsQuery: { isLoading, error, data },
    setProductsTemp,
  } = useCustomFoods();

  const { onSubmit, handleRetrySubmit } = useCustomProducts({
    setProductsTemp,
  });

  useEffect(() => {
    return () => {
      resetState();
    };
  }, [resetState]);

  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <div className={styles.text}>식품 입력</div>
        {data?.mgrList && (
          <ManagerList className={styles.mgrList} mgrList={data.mgrList} />
        )}
      </div>

      {warning && <Banner text={"매니저를 선택해주세요."} />}
      {loading && <PacmanSpinner />}
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
      {isLoading && <LoadingBarSpinner />}
      {data?.customFood && (
        <InputTempForm onSubmit={onSubmit} products={data.customFood} />
      )}
      <div className={styles.buttons}>
        <Button text={"저장"} type={"submit"} form={"inputForm"} />
        <Button text={"취소"} handleFunction={handleClick} />
      </div>
    </section>
  );
}
