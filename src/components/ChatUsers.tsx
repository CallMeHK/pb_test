import { useState } from "preact/hooks";
import { useUsers, UserCollection } from "../hooks";
import { ChatBox } from './ChatBox'

export const ChatUsers = () => {
  const { data: users } = useUsers();
  const [openUser, setOpenUser] = useState<UserCollection | null>(null);
  return (
    <section>
      {users.map((user) => {
        return (
          <details
            key={user.id}
            open={openUser?.id === user.id}
          >
            <summary
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOpenUser((val) => (val?.id === user.id ? null : user));
            }}
            >{user.username}</summary>
            {openUser?.id === user.id && (
              <ChatBox user={user} />
            )}
          </details>
        );
      })}
    </section>
  );
};
