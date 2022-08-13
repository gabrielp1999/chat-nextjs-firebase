import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../services/firebase";
import * as S from "./styles";
import { MdPerson } from "react-icons/md";

const getUser = (users, userLogged) =>
  users?.filter((user) => user !== userLogged?.email)[0];

const SidebarChatsItem = ({ id, users, user, setUserChat, active }) => {
  const [getUserItem] = useCollection(
    db.collection("users").where("email", "==", getUser(users, user))
  );

  const Avatar = getUserItem?.docs?.[0]?.data();
  const item = getUser(users, user);

  const handleNewChat = () => {
    const userChat = {
      chatId: id,
      name: item.split("@")[0],
      photoURL: Avatar?.photoURL,
    };

    setUserChat(userChat);
  };

  // const nameformated = item.split("@"[0])[0].split("."[0]);

  return (
    <S.Wrapper onClick={() => handleNewChat()} className={active}>
      {Avatar ? <S.Avatar src={Avatar?.photoURL} /> : <MdPerson />}
      <S.Name>{item.split("@")[0]}</S.Name>
    </S.Wrapper>
  );
};

export default SidebarChatsItem;
