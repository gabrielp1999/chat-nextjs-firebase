import React from "react";
import { auth, provider } from "../../services/firebase";
import * as S from "./styles";

const Login = () => {
  const handleSignin = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <S.Wrapper>
      <S.Button onClick={handleSignin}>Login com Google</S.Button>
    </S.Wrapper>
  );
};

export default Login;
