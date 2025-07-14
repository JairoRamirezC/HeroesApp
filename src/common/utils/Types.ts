export interface TodosType {
  id: string | undefined;
  task?: string | undefined;
  completed?: boolean | undefined;
}

export interface TodoFormProps {
  handleUpdateTodo: (todo: TodosType) => void;
}

export interface TodoListProps {
  todos: TodosType[];
  handleDeleteTodo: (id: string) => void;
  handleToggleTodo: (id: string) => void;
}

export interface ActionType {
  type: 'ADD_TODO' | 'UPDATE_TODO' | 'DELETE_TODO';
  payload?: TodosType;
}

export interface Data {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface Location {
  name: string;
  url: string;
}