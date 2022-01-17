import { ITodo } from './../types/ITodo';
import { LoadTodos, CreateTodo } from './../types/todos'
import { TodoActionTypes } from "../types/todos"

export const TodosActionCreators = {
    loadTodos: (payload: ITodo[]): LoadTodos => ({type: TodoActionTypes.LOAD_TODOS, payload}),
    createTodo: (payload: ITodo): CreateTodo => ({type: TodoActionTypes.CREATE_TODO, payload})
}