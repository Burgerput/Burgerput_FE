import React, { useEffect } from "react";
import styles from "./CustomPage.module.css";
import CustomProduct from "../components/CustomProduct";
import Banner from "./../components/Banner";
import Button from "../components/Button";
import { useGoHome } from "../hooks/useNavigator";
import { useFoods } from "../hooks/products";
import { useSubmitActions, useSubmitStates } from "../store/uiState";
import { useResetCustomProducts } from "../store/products";

export default function CustomFoods() {
  const { handleClick } = useGoHome();
  const { success } = useSubmitStates();
  const { resetState } = useSubmitActions();

  const {
    productsQuery: { isLoading, error, data: foods },
    handleSubmitProducts,
  } = useFoods();

  const resetProducts = useResetCustomProducts();

  useEffect(() => {
    return () => {
      resetProducts();
      resetState();
    };
  }, [resetProducts, resetState]);

  return (
    <section className={styles.section}>
      <div className={styles.title}>식품 선택</div>
      <div className={styles.wrapper}>
        <form
          id="customFoods"
          className={styles.form}
          onSubmit={handleSubmitProducts}
        >
          {success && <Banner text={"식품 선택이 완료되었습니다."} />}
          <div className={styles.products}>
            {error && <p>{error}</p>}
            {isLoading && <p>Loading...</p>}
            {foods &&
              foods.map((food) => (
                <div key={food.id}>
                  <CustomProduct
                    value={food}
                    checkedIt={food.isChecked === "true" ? true : false}
                  />
                </div>
              ))}
          </div>
        </form>
        <div className={styles.buttons}>
          <Button text={"저장"} form={"customFoods"} />
          <Button text={"취소"} handleFunction={handleClick} />
        </div>
      </div>
    </section>
  );
}
