import { useState, useEffect, useRef, useMemo } from "preact/hooks";
import { useTodos } from "../hooks";
import { Modal } from "../components";
import { Todos } from "../types";

export const TodoList = () => {
  const [footer, setFooter] = useState<string | null>(null);
  const [modal, setModal] = useState<Todos | null>(null);
  const [modalText, setModalText] = useState<string>("");
  const inputRef = useRef();
  const todosParams = useMemo(() => ({subscription: {event: "*"}}), [])
  const { todos, deleteTodo, updateTodo } = useTodos(todosParams);
  console.log(todos);

  useEffect(() => {
    setModalText(modal?.text || "");
    !!modal?.text && inputRef?.current?.focus();
  }, [modal?.text]);

  const sortedTodos = useMemo(() => {
    const doneTodos = todos.filter((todo) => todo.done);
    const notDoneTodos = todos.filter((todo) => !todo.done);
    return [...notDoneTodos, ...doneTodos];
  }, [todos]);

  return (
    <section id="preview">
      {sortedTodos.map((todo) => (
        <article
          onClick={() => setFooter(val => !!val ? null : todo.id)}
          style={{
            backgroundColor: "#182530",
            margin: "calc(var(--block-spacing-vertical)/2) 0",
            padding:
              "calc(var(--block-spacing-horizontal)/1.5) calc(var(--block-spacing-horizontal)/1.5)",
          }}
          key={todo.id}
        >
          {todo.done && <span style={{ color: "red" }}>Done!</span>}
          <p>{todo.text}</p>
          {footer === todo.id && (
            <footer style={{ display: "flex", flexDirection: "row-reverse" }}>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{ maxWidth: "165px" }}
              >
                Delete
              </button>
              <button
                className="contrast"
                onClick={() => setModal(todo)}
                style={{ marginRight: "8px", maxWidth: "165px" }}
              >
                Edit
              </button>
              <button
                onClick={async () => {
                  await updateTodo(todo.id, { ...todo, done: !todo.done });
                  // setFooter(null);
                }}
                className="secondary"
                style={{ marginRight: "8px", maxWidth: "165px" }}
              >
                {todo.done ? "Undone" : "Done"}
              </button>
            </footer>
          )}
        </article>
      ))}
      {modal && (
        <Modal close={() => setModal(null)}>
          <p>Edit your todo</p>
          <input
            value={modalText}
            onInput={(e: any) => setModalText(e.target.value)}
            ref={inputRef}
          />
          <footer>
            <a
              href="#cancel"
              role="button"
              className="secondary"
              data-target="modal-example"
              onClick={(e) => {
                e.preventDefault();
                setModal(null);
              }}
            >
              Cancel
            </a>
            <a
              href="#confirm"
              role="button"
              data-target="modal-example"
              onClick={async (e) => {
                e.preventDefault();
                await updateTodo(modal.id, { ...modal, text: modalText });
                setModal(null);
              }}
            >
              Update
            </a>
          </footer>
        </Modal>
      )}
    </section>
  );
};
