import { useState } from "preact/hooks";
import { useTodos } from "../hooks";

export const TodoList = () => {
  const [footer, setFooter] = useState<string | null>(null);
  const { todos, deleteTodo } = useTodos();
  console.log(todos);

  return (
    <section id="preview">
      {todos.map((todo) => (
        <article
          onClick={() => setFooter(todo.id)}
          style={{
            backgroundColor: "#182530",
            margin: "calc(var(--block-spacing-vertical)/2) 0",
            padding:
              "calc(var(--block-spacing-horizontal)/1.5) calc(var(--block-spacing-horizontal)/1.5)",
          }}
          key={todo.id}
        >
          <p>{todo.text}</p>
          {footer === todo.id && (
            <footer style={{ display: "flex", flexDirection: "row" }}>
              <button 
              onClick={() => deleteTodo(todo.id)}
              style={{ marginRight: "8px", maxWidth: "165px" }}>
                Delete
              </button>
              <button className="contrast" style={{ maxWidth: "165px" }}>
                Edit
              </button>
            </footer>
          )}
        </article>
      ))}
    </section>
  );
};
