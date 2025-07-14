// import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { useTodos } from '../../hooks';


const TodoApp = () => {
  const { todos, handleUpdateTodo, handleDeleteTodo, handleToggleTodo, todosCount, pendingTodosCount } = useTodos();


  return (
    <div className='todoapp--container'>
      <h1 className='todoapp--container__title'>TodoApp: ({todosCount}), <small>pendientes: {pendingTodosCount}</small> </h1>

      <TodoForm handleUpdateTodo={handleUpdateTodo} />

      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} />
    </div>
  )
}

export default TodoApp;