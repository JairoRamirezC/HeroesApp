import { useEffect, useReducer } from "react";
import { reducer } from "../components/useReducer/todoReducer";
import { TodosType } from "../common/utils/Types";

const initialState: TodosType[] = [
  {
    // id: uuidv4(),
    id: crypto.randomUUID(), //* Crea ids unicos con formato uuid, pero sin instalar dependencias.
    task: "Learn React",
    completed: false,
  },
  {
    id: crypto.randomUUID(),
    task: "Learn Node",
    completed: false,
  },
];

const initializer = () => {
  return (
    localStorage.getItem("todos") &&
    JSON.parse(localStorage.getItem("todos") || "")
  );
};

const knowDataDuplication = (todos: TodosType[], task: string) => {
  return todos.some((todo) => todo.task === task);
};

export const useTodos = () => {

  const [todos, dispatch] = useReducer(reducer, initialState, initializer);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleUpdateTodo = (todo: TodosType) => {
    if (!todo.task) return;

    if (!knowDataDuplication(todos, todo.task)) {
      dispatch({
        type: "ADD_TODO",
        payload: todo,
      });
    }
  };

  const handleDeleteTodo = (id: string) => {
    if (!id) return;
    dispatch({
      type: "DELETE_TODO",
      payload: { id },
    });
  };

  const handleToggleTodo = (id: string) => {
    if (!id) return;
    dispatch({
      type: "UPDATE_TODO",
      payload: { id },
    });
  };

  const todosCount = todos.length;
  const pendingTodosCount = todos.filter((todo: TodosType) => !todo.completed).length;

  return {
    todos,
    handleUpdateTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount,
    pendingTodosCount,
  };

};
