import { useState, useRef } from "preact/hooks";
import { usePmessages } from "../hooks";
import { user_data } from "../signals";

export const ChatInput = ({ userId }: { userId: string }) => {
  const [msg, setMsg] = useState<string>("");
  const { create } = usePmessages({ skipMountFetch: true });
  const inputRef = useRef();
  const onInput = (e: any) => setMsg(e.target.value);
  const onSubmit = async (e: any) => {
    e.preventDefault();
    await create({
      text: msg,
      author: user_data.value.id,
      recipient: userId,
    });
    setMsg("");
    inputRef!.current.focus();
  };
  return (
    <section id="form">
      <form onSubmit={onSubmit} autocomplete="off">
        <input
          type="text"
          id="text"
          name="text"
          placeholder=""
          value={msg}
          onInput={onInput}
          ref={inputRef}
        />
      </form>
    </section>
  );
};
