import React from "react";
import SignInForm from "../components/SignInForm";

export default function SignIn() {
  return (
    <section>
      <h2>보안을 위해 로그인이 필요해요!</h2>
      <p>
        버거풋은 웹에 공개되어 있어요. 일반 사용자가 악의적으로 젠풋을 마음대로
        입력할 수 있어 만일을 대비해 로그인 기능을 도입했어요.
      </p>
      <p>
        아이디와 패스워드는 단순히 해당 매장의 접근만을 허용하기 위한 장치로
        관리자가 직접 만들어 제공해요.
      </p>
      <p>
        하지만 걱정하지 마세요! 처음 로그인 이후로 다시 로그인 창을 보는
        번거로움은 없을 거예요!
      </p>
      <p></p>
      <SignInForm />
    </section>
  );
}
