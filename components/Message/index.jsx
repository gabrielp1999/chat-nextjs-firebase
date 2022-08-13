import React from "react";
import * as S from "./styles";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";

const Message = ({ user, message }) => {
  const [userLoggedIn] = useAuthState(auth);

  return (
    <S.Wrapper>
      <S.Line className={userLoggedIn?.email === user ? "me" : ""}>
        <S.Content>
          <S.Message>{message.message}</S.Message>
          <S.MessageDate>
            {new Date(message?.timestamp).toLocaleString()}
          </S.MessageDate>
        </S.Content>
      </S.Line>
    </S.Wrapper>
  );
};

export default Message;
