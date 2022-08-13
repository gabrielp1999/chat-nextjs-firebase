import styled from "styled-components";

export const Wrapper = styled.div``;

export const Line = styled.div`
  margin: 10px;
  display: flex;

  &.me {
    > div {
      background-color: rgba(150, 200, 240, 0.8);
      color: #000;
    }
    justify-content: right;
  }
`;

export const Content = styled.div`
  background-color: rgba(240, 240, 240, 0.8);
  border-radius: 5px;
  box-shadow: 0 2px 2px #455561;
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 2px 10px;
  max-width: 80%;
  font-weight: 500;
`;

export const Message = styled.span`
  font-size: 18px;
  margin: 5px 40px 5px 5px;
`;

export const MessageDate = styled.span`
  font-size: 12px;
  color: #777;
  font-weight: bold;
  text-align: right;
  height: 15px;
  margin: -5px 5px 0;
`;
