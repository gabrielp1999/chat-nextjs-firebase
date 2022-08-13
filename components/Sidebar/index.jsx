import React from "react";
import * as S from "./styles";
import SidebarHeader from "../SidebarHeader/index";
import SidebarChats from "../SidebarChats/index";

const Sidebar = ({ setUserChat, userChat }) => {
  return (
    <S.Wrapper>
      <SidebarHeader setUserChat={setUserChat} />
      <SidebarChats setUserChat={setUserChat} userChat={userChat} />
    </S.Wrapper>
  );
};

export default Sidebar;
