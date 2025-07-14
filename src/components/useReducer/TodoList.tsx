import { TodoListProps } from "../../common/utils/Types";


const TodoList = ({todos, handleDeleteTodo, handleToggleTodo}: TodoListProps) => {


  return (
    <ul className='todoapp--container--list'>
      {todos.map(todo => (
        <li key={todo?.id} className='todoapp--container--list__item'>
          <span>{todo?.completed ? '✔️' : '❌'} {todo?.task}</span>
          <div>
            <button className='todoapp--container--list--item__button btn-edit' onClick={() => todo?.id && handleToggleTodo(todo?.id)}>{todo?.completed ? 'Revertir' : 'Terminar'}</button>
            <button className='todoapp--container--list--item__button btn-delete' onClick={() => todo?.id && handleDeleteTodo(todo?.id)}>Borrar</button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TodoList;