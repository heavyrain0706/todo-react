import { CreateTodo, LoadTodos, TodoActionTypes } from './types/todos';
import { ITodo } from './models/ITodo';


export const TodosActionCreators = {
    loadTodos: (payload: ITodo[]): LoadTodos => ({type: TodoActionTypes.LOAD_TODOS, payload}),
    createTodo: (payload: ITodo): CreateTodo => ({type: TodoActionTypes.CREATE_TODO, payload})
}