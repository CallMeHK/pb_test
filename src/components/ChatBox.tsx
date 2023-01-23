import { useMemo } from "preact/hooks";
import { UserCollection, useChats } from "../hooks";
import { user_data } from "../signals";

export const ChatBox = ({ user }: { user: UserCollection }) => {
  const query = useMemo(
    () => ({ filter: `users~"${user.id}" && users~"${user_data.value.id}"` }),
    [user.id, user_data.value.id]
  );
  const { data: chat, loading } = useChats(query);
  console.log("chat: ", user, query, chat);

  
  if (loading)return null
  else if (!chat[0]) return "no chat found"
  else return "chat found"
};
