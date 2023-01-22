import { useCallback, useEffect } from "preact/hooks";
import { useSignal, signal } from "@preact/signals";
import { RecordListQueryParams } from "pocketbase";
import { pb, user_data } from "../signals";
import { Todos } from "../types";

const todos = signal<Todos[]>([]);

type SubscriptionEvent = {
  action: string;
  record: Todos;
};

type Subscription = {
  events: string | "*";
  callback: (event: SubscriptionEvent) => void;
};

export const useTodos = (
  queryParams?:
    | RecordListQueryParams
    | { skip?: boolean; subscription?: Subscription }
) => {
  const loading = useSignal(true);
  const error = useSignal<any>(null);
  useEffect(() => {
    const { subscription, skip, ...params } = queryParams || {
      sort: "-created",
    };
    if (!skip) {
      pb.collection("todos")
        .getFullList<Todos>(200 /* batch size */, params)
        .then((response) => {
          loading.value = false;
          todos.value = response;
        })
        .catch((e) => {
          loading.value = false;
          error.value = e;
        });
    }
  }, [queryParams]);

  const createTodo = useCallback(
    async (todo: { text: string; done: boolean }) => {
      try {
        const record = await pb
          .collection("todos")
          .create<Todos>({ ...todo, user: user_data.value.id });
        todos.value = [record, ...todos.value];
        console.log("successfully created todo");
        return { success: true };
      } catch (e) {
        console.log("could not create todo: ", e);
        return { success: false, error: e };
      }
    },
    []
  );

  const deleteTodo = useCallback(async (todoId: string) => {
    try {
      const record = await pb.collection("todos").delete(todoId);
      todos.value = todos.value.filter((todo) => todo.id !== todoId);
      console.log("successfully deleted todo");
      return { success: true, data: record };
    } catch (e) {
      console.log("could not delete todo: ", e);
      return { success: false, error: e };
    }
  }, []);

  const updateTodo = useCallback(
    async (todoId: string, data: Omit<Todos, "id">) => {
      try {
        console.log("updated todo: ", todoId, {
          text: data.text,
          done: data.done,
          user: data.user,
        });
        const record = (await pb
          .collection("todos")
          .update(todoId, data)) as Todos;
        todos.value = todos.value.map((todo) =>
          todo.id === todoId ? record : todo
        );
        console.log("successfully updated todo");
        return { success: true, data: record };
      } catch (e) {
        console.log("could not update todo: ", e);
        return { success: false, error: e };
      }
    },
    []
  );

  useEffect(() => {
    if (!!queryParams?.subscription?.event) {
      const callback =
        queryParams?.subscription?.callback ||
        ((e) => {
          console.log("subscription event recieved: ", e);
        });
      console.log("subscribing to * todos");
      pb.collection("todos").subscribe(queryParams?.subscription?.event, callback);
      return () => {
        console.log("unsubscribing to * todos");
        pb.collection("todos").unsubscribe(queryParams?.subscription?.event);
      };
    }
  }, [queryParams?.subscription?.run, queryParams]);

  return {
    loading: loading.value,
    todos: todos.value,
    error: error.value,
    createTodo,
    deleteTodo,
    updateTodo,
  };
};
