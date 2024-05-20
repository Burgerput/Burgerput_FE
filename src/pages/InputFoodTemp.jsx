import React from "react";
import Banner from "../components/Banner";
import ManagerList from "../components/ManagerList";
import Button from "../components/Button";
import styles from "./InputTemp.module.css";
import Modal from "../components/Modal";
import { useGoHome } from "../hooks/useNavigator";
import { useCustomFoods, useCustomProducts } from "../hooks/customProducts";
import { useLoading, useResult, useWarning } from "../store/uiState";
import InputTempForm from "../components/InputTempForm";

export default function InputFoodTemp() {
  const { handleClick } = useGoHome();

  const warning = useWarning();
  const loading = useLoading();
  const result = useResult();

  const {
    productsQuery: { isLoading, error, data },
    setProductsTemp,
  } = useCustomFoods();

  const { onSubmit, handleRetrySubmit } = useCustomProducts({
    setProductsTemp,
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <section className={styles.section}>
        <div className={styles.title}>
          <div className={styles.text}>식품 입력</div>
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
        {data?.customFood && (
          <InputTempForm onSubmit={onSubmit} products={data.customFood} />
        )}
        <div className={styles.buttons}>
          <Button text={"저장"} type={"submit"} form={"inputForm"} />
          <Button text={"취소"} handleFunction={handleClick} />
        </div>
      </section>
    </>
  );
}
