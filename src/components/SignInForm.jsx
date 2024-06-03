import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "../api/user";
import { useNavigate } from "react-router-dom";

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    signIn(data)
      .then((res) => {
        if (res) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("로그인 과정에 문제가 발생했어요!");
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">아이디</label>
        <input
          id="id"
          type="text"
          placeholder="아이디를 입력하세요!"
          autoComplete="off"
          {...register("id", {
            required: "아이디는 필수 입력 사항입니다.",
          })}
        />
        {errors.id && <small>{errors.id.message}</small>}
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          placeholder="비밀번호를 입력하세요!"
          {...register("password", {
            required: "비밀번호는 필수 입력 사항입니다.",
          })}
        />
        {errors.password && <small>{errors.password.message}</small>}
      </div>
      <button>로그인</button>
    </form>
  );
}
