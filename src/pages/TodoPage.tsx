import { Main } from "../components";
import { TodoForm, TodoList } from "../components";

export const TodoPage = () => {
  return (
    <>
      <Main>
        <TodoForm />
        <TodoList />
      </Main>
    </>
  );
};
