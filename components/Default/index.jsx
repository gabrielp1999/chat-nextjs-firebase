import React from "react";
import * as S from "./styles";
import { MdMessage } from "react-icons/md";
import Link from "next/link";

const Default = () => {
  return (
    <S.Wrapper>
      <S.Chat src="https://cdn-icons.flaticon.com/png/512/2218/premium/2218316.png?token=exp=1660324147~hmac=fea61064c9a67208f4bffd385eb4a23e" />
      <S.Title>Plus Chat</S.Title>
      <S.Info>
        Plus Chat Usando as Tecnologias Nextjs e Firebase, Desenvolvido por{" "}
        <Link href="https://www.linkedin.com/in/gabriel-souza-miranda/">
          <p className="name">Gabriel</p>
        </Link>
      </S.Info>
    </S.Wrapper>
  );
};

export default Default;
