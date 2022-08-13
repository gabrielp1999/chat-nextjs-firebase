import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  /* background-image: url("https://vurbee.com.br/wp-content/uploads/2019/06/fundo-site-vurbee.jpg"); */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  .name {
    color: #00f;
    font-weight: bold;
    text-decoration: underline;
    &:hover {
      transition: 500ms;
      color: red;
      cursor: pointer;
    }
  }
`;

export const Chat = styled.img`
  width: 150px;
`;

export const Title = styled.h1`
  text-align: center;
  color: #eee;
`;

export const Info = styled.span`
  font-size: 18px;
  text-align: center;
  max-width: 500px;
  color: #eee;
  font-weight: bold;
`;
