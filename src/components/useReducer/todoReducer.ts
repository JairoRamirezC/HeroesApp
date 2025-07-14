import { ActionType, TodosType } from "../../common/utils/Types";


export const reducer = (state: TodosType[], action: ActionType) => {
  switch ( action.type ){

    case 'ADD_TODO':
      state = [
        ...state,
        {
          id: action?.payload?.id,
          task: action?.payload?.task,
          completed: action?.payload?.completed || false
        }
      ]
      return state;


    case 'UPDATE_TODO':
      state = state.map(todo => todo?.id === action?.payload?.id ? {
            ...todo,
            completed: !todo?.completed
          } : todo);
          
      return state;


    case 'DELETE_TODO':
      state = state.filter(todo => todo.id !== action.payload?.id);
      return state;

    default:
      return state;
  }
}