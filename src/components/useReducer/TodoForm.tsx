import { useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
// import { v4 as uuidv4 } from 'uuid';
import { TodoFormProps } from "../../common/utils/Types";


const TodoForm = ({handleUpdateTodo}:TodoFormProps) => {

  const [valueInput, setValueInput] = useState({
    task: ''
  });

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValueInput({
      ...valueInput,
      [name]: value
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(valueInput.task.trim() === '' || valueInput.task.length <= 3) return;
    const newTodo = {
      // id: uuidv4(),
      id: crypto.randomUUID(), //* Otra forma de crear ids con formato uuid pero directamente con javscript, sin instalar dependencias.
      task: valueInput.task,
      completed: false
    }
    handleUpdateTodo(newTodo);
    setValueInput({
      task: ''
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='todoapp--container--form'>
        <input 
          type="text" 
          name="task" 
          value={valueInput.task} 
          onChange={handleChangeInput} 
          placeholder="¿Qué hay que hacer?"
        />
        <button type="submit">Agregar</button>
      </form>
    </>
  )
}

export default TodoForm;