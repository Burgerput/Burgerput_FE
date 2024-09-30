const adminMenuItems = [
  { label: "기기 선택", to: "select/machines" },
  { label: "식품 선택", to: "select/foods" },
  { label: "관리자 목록 수정", to: "select/managers" },
  { label: "관리자 계정 입력", to: "address" },
];

const zenputMenuItems = [
  { label: "오전 기기", to: "/zenput/machines", state: "AM" },
  { label: "오전 식품", to: "/zenput/foods", state: "AM" },
  { label: "오후 기기", to: "/zenput/machines", state: "PM" },
  { label: "오후 식품", to: "/zenput/foods", state: "PM" },
];

const cheatMenuItems = [
  { label: "hidden" },
  { label: "hidden" },
  { label: "사용 방법", to: "/zenput/random/guide" },
  { label: "기기 범위 지정", to: "/zenput/random/machine" },
  { label: "식품 범위 지정", to: "/zenput/random/food" },
];

export const DROPDOWN_MENU = [adminMenuItems, zenputMenuItems, cheatMenuItems];
