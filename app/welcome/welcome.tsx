import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setupServer } from "~/fakeApi";
import Filter from "~/pages/TodoList";
import { fetchTodos, todoSlice } from "~/store/slice/todoSlice";

if (process.env.NODE_ENV === 'development') {
  setupServer();
}

export function Welcome() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos() as any);
  }, []);

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <Filter />
    </main>
  );
}

