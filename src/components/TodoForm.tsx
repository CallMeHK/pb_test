import { useState, useRef } from "preact/hooks";
import { useTodos } from "../hooks";

export const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const inputRef = useRef();
  const { createTodo } = useTodos();
  const onInput = (e: any) => setTodo(e.target.value);
  const onSubmit = async (e: any) => {
    e.preventDefault();
    await createTodo({ text: todo, done: false });
    console.log(todo);
    setTodo("");
    inputRef!.current.focus();
  };
  return (
    <section id="form">
      <form onSubmit={onSubmit} autocomplete="off">
        <h3>Add todos</h3>
        <label for="text">Todo</label>
        <input
          type="text"
          id="text"
          name="text"
          placeholder="Todo"
          value={todo}
          onInput={onInput}
          ref={inputRef}
        />
        <small>Press enter to submit your todo</small>
      </form>
    </section>
  );
};
