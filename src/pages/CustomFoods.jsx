import React from "react";
import styles from "./CustomPage.module.css";
import CustomProduct from "../components/CustomProduct";
import Banner from "./../components/Banner";
import Button from "../components/Button";
import { useGoHome } from "../hooks/useNavigator";
import { useFoods } from "../hooks/products";

export default function CustomFoods() {
  const { handleClick } = useGoHome();

  const {
    productsQuery: { isLoading, error, data: foods },
    handleSubmitProducts,
    success,
  } = useFoods();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {foods && (
        <section className={styles.section}>
          <div className={styles.title}>식품 선택</div>
          <div className={styles.wrapper}>
            <form
              id='customFoods'
              className={styles.form}
              onSubmit={handleSubmitProducts}
            >
              {success && <Banner text={"식품 선택이 완료되었습니다."} />}
              <div className={styles.products}>
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
      )}
    </>
  );
}
