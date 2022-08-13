import React from "react";
import ChatHeader from "../ChatHeader";
import * as S from "./styles";
import Default from "../Default";
import ChatBody from "../ChatBody";
import ChatFooter from "../ChatFooter";
import DefaultHeader from "../DefaultHeader";

const Chat = ({ userChat }) => {
  if (!userChat) {
    return (
      <div className="block">
        <DefaultHeader />
        <Default />
      </div>
    );
  }

  return (
    <S.Wrapper>
      <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} />
      <ChatBody chatId={userChat?.chatId} />
      <ChatFooter chatId={userChat?.chatId} />
    </S.Wrapper>
  );
};

export default Chat;
