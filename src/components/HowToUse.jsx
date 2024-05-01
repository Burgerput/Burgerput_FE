import React, { useEffect, useState } from "react";
import styles from "./HowToUse.module.css";

const TIPS = [
  "Admins 탭에서 사용하고 싶은 기기 및 식품을 선택할 수 있습니다!",
  "관리자 목록 수정 탭에서 사용자를 추가할 수 있습니다!",
  "제출시 Zenput 계정이 필요합니다. 관리자 계정 추가 탭에서 입력해주세요!",
  "Zenput 탭에선 오전, 오후 시간에 알맞게 클릭해야 됩니다!",
  "기입시 제공된 온도 범위에 맞게 기입해주세요. 틀리면 지워버림.",
  "제출 전 오른쪽 상단에서 사용자를 선택해주세요! (지원 매니저의 경우 직접 입력 클릭 후 기입)",
  "제출에 시간이 소요되니 잠시 다른 일을 진행해주세요.",
  "버거를 3번 클릭해보세요!",
];

export default function HowToUse() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setIndex((index) => index + 1);
    }, 8000);

    if (index === TIPS.length) {
      setIndex(0);
    }

    return () => clearInterval(count);
  }, [index]);
  return (
    <section className={styles.tipBox}>
      <h1 className={styles.tipBox__title}>간단한 사용 TIP!</h1>
      <p className={styles.tipBox__description}>{TIPS[index]}</p>
    </section>
  );
}
