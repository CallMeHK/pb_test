import { useMemo, useEffect, useRef } from "preact/hooks";
import {
  UserCollection,
  usePmessages,
  pmessages_collection,
  PmessageSubscriptionEvent,
} from "../hooks";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";
import { user_data } from "../signals";

const AlwaysScrollToBottom = () => {
  const elementRef = useRef();
  useEffect(() => elementRef.current.scrollIntoView());
  return <div ref={elementRef} />;
}

export const ChatBox = ({ user }: { user: UserCollection }) => {
  const query = useMemo(
    () => ({
      filter: `(author.id="${user.id}" && recipient.id="${user_data.value.id}") || (author.id="${user_data.value.id}" && recipient.id="${user.id}")`,
      sort: "+created",
      subscription: {
        event: "*",
        callback: (event: PmessageSubscriptionEvent) => {
          if (event.action === "create")
            pmessages_collection.value = [
              ...pmessages_collection.value,
              event.record,
            ];
        },
      },
    }),
    [user.id]
  );
  const { data: pmessages, loading } = usePmessages(query);

  if (loading) return null;
  else
    return (
      <div
        style={{
          overflowY: "auto",
          maxHeight: "60vh",
        }}
      >
        <ChatMessages />
        <ChatInput userId={user.id} />
        <AlwaysScrollToBottom />
      </div>
    );
};
