import { ITodo } from './ITodo';

export interface TodoState {
    todos: ITodo[];
}

export enum TodoActionTypes {
    LOAD_TODOS = 'LOAD_TODOS',
    CREATE_TODO = 'CREATE_TODO'
}

export interface LoadTodos {
    type: TodoActionTypes.LOAD_TODOS;
    payload: ITodo[]
}

export interface CreateTodo {
    type: TodoActionTypes.CREATE_TODO;
    payload: ITodo;
}

export type TodoAction = LoadTodos | CreateTodo
                         