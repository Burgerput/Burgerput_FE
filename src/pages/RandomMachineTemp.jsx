import React, { useEffect } from "react";
import styles from "./RandomTemp.module.css";
import SetTemp from "../components/SetTemp";
import { useCheatProducts } from "../hooks/useCheat";
import ManagerList from "../components/ManagerList";
import Banner from "../components/Banner";
import Modal from "../components/Modal";
import { useRandomMachineTemp } from "../hooks/RandomTemp";
import RandomTempForm from "../components/RandomTempForm";

export default function RandomMachineTemp() {
  const { submitCustomTemp, data, setCustomTemp } = useRandomMachineTemp();
  // const {
  //   handleSave,
  //   handleSubmit,
  //   setProducts,
  //   setResult,
  //   products,
  //   status: { success, loading, warning },
  //   result,
  //   setTime,
  // } = useCheatProducts({
  //   submitCustomTemp,
  //   setCustomTemp,
  // });

  // useEffect(() => {
  //   setProducts(data?.customCheatMachine);
  // }, [data]);

  return (
    <section>
      {data?.customCheatMachine && (
        <RandomTempForm products={data.customCheatMachine} />
      )}
    </section>
    // <section className={styles.section}>
    //   <div className={styles.title}>
    //     <div className={styles.text}>기기 범위</div>
    //     {data?.mgrList && (
    //       <ManagerList className={styles.mgrList} mgrList={data.mgrList} />
    //     )}
    //   </div>
    //   <form className={styles.form}>
    //     {success && <Banner text={"지정한 범위를 저장했습니다."} />}
    //     {warning === "missing" && (
    //       <Banner text={"결품 범위는 저장할 수 없습니다."} />
    //     )}
    //     {warning === "manager" && <Banner text={"매니저를 선택해주세요."} />}
    //     {loading && (
    //       <Banner
    //         type={"loading"}
    //         text={
    //           <img
    //             src="/spinner/spinner.gif"
    //             width="60%"
    //             style={{ paddingTop: "2px" }}
    //           />
    //         }
    //       />
    //     )}
    //     {result.result === "true" && (
    //       <Modal
    //         title={"제출"}
    //         setResult={setResult}
    //         component={"값을 정상적으로 제출했습니다."}
    //       />
    //     )}
    //     {result.result === "false" && (
    //       <Modal
    //         title={"에러 발생"}
    //         error={true}
    //         submit={handleSubmit}
    //         setResult={setResult}
    //         component={"입력에 실패했습니다. 다시 시도해주세요."}
    //       />
    //     )}
    //     {products &&
    //       products.map((product) => (
    //         <li key={product.id}>
    //           <SetTemp product={product} />
    //         </li>
    //       ))}
    //   </form>
      // <section className={styles.btnContainer}>
      //   <button
      //     className={styles.saveBtn}
      //     onClick={handleSave}
      //     disabled={success || warning}
      //   >
      //     범위 저장
      //   </button>
      //   <button
      //     className={styles.submitBtn}
      //     onClick={(e) => {
      //       setTime.current = "AM";
      //       handleSubmit(e);
      //     }}
      //     disabled={success || warning}
      //   >
      //     오전 기기 제출
      //   </button>
      //   <button
      //     className={styles.submitBtn}
      //     onClick={(e) => {
      //       setTime.current = "PM";
      //       handleSubmit(e);
      //     }}
      //     disabled={success || warning}
      //   >
      //     오후 기기 제출
      //   </button>
    //   </section>
    // </section>
  );
}
