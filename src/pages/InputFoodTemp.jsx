import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import InputProducts from "../components/InputProducts";
import ManagerList from "../components/ManagerList";
import Button from "../components/Button";
import styles from "./InputTemp.module.css";
import Modal from "../components/Modal";
import { useGoHome } from "../hooks/useNavigator";
import { useCustomFoods, useCustomProducts } from "../hooks/customProducts";
import { useLoading, useResult, useWarning } from "../store/uiState";

export default function InputFoodTemp() {
  const location = useLocation();

  const { handleClick } = useGoHome();

  const warning = useWarning();
  const loading = useLoading();
  const result = useResult();

  const {
    productsQuery: { isLoading, error, data },
    setProductsTemp,
  } = useCustomFoods();

  const { handleSubmit, products, setProducts } = useCustomProducts({
    location,
    setProductsTemp,
  });

  useEffect(() => {
    setProducts(data?.customFood);
  }, [data]);

  return (
    <>
      {products && (
        <section className={styles.section}>
          <div className={styles.title}>
            <div className={styles.text}>식품 입력</div>
            {data?.mgrList && (
              <ManagerList className={styles.mgrList} mgrList={data.mgrList} />
            )}
          </div>
          <form
            className={styles.form}
            id="inputMachine"
            onSubmit={handleSubmit}
          >
            {warning && <Banner text={"비어있는 항목이 존재합니다."} />}
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
              <Modal
                title={"제출"}
                component={"값을 정상적으로 제출했습니다."}
              />
            )}
            {result.result === "false" && (
              <Modal
                title={"에러 발생"}
                error={true}
                submit={handleSubmit}
                component={"입력에 실패했습니다. 다시 시도해주세요."}
              />
            )}
            {products.length === 0 ? (
              <div className={styles.empty}>먼저 식품 선택을 완료해주세요.</div>
            ) : (
              products.map((product) => (
                <div
                  className={styles.product}
                  key={product.id}
                  onSubmit={handleSubmit}
                >
                  <InputProducts product={product} />
                </div>
              ))
            )}
          </form>
          <div className={styles.buttons}>
            <Button
              text={"저장"}
              form={"inputMachine"}
              disabled={products.length === 0 ? true : false}
            />
            <Button text={"취소"} handleFunction={handleClick} />
          </div>
        </section>
      )}
    </>
  );
}
