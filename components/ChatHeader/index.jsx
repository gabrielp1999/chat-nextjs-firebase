import React from "react";
import * as S from "./styles";
import { MdPerson, MdMoreVert, MdSearch } from "react-icons/md";

const ChatHeader = ({ photoURL, name }) => {
  // const nameformated = name.split("@"[0])[0].split("."[0]);

  return (
    <S.Wrapper>
      <S.UserInfo>
        {photoURL ? <S.Avatar src={photoURL} alt="Avatar" /> : <MdPerson />}
        <S.NameContent>
          <S.Name>{name}</S.Name>
        </S.NameContent>
      </S.UserInfo>
      <S.Options>
        <MdSearch color="#eee" />
        <MdMoreVert color="#eee" />
      </S.Options>
    </S.Wrapper>
  );
};

export default ChatHeader;
