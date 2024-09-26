export const FORM_FIELD_DATA = [
  {
    label: "젠풋 이메일",
    id: "email",
    type: "email",
    defaultValueKey: "zenputId",
    placeholder: "example@email.com",
    validation: {
      required: "이메일은 필수 입력 사항입니다.",
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "이메일 형식에 맞지 않습니다.",
      },
    },
  },
  {
    label: "rbi 아이디",
    id: "id",
    type: "id",
    defaultValueKey: "rbiId",
    placeholder: "your ID",
    validation: {
      required: "아이디는 필수 입력 사항입니다.",
    },
  },
  {
    label: "rbi 비밀번호",
    id: "password",
    type: "password",
    placeholder: "********",
    defaultValueKey: "rbiPw",
    validation: {
      required: "비밀번호는 필수 입력 사항입니다.",
      minLength: {
        value: 6,
        message: "비밀번호 형식에 맞지 않습니다.",
      },
    },
  },
];
