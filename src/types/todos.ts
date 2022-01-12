export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
}

export enum TodoActionTypes {
    SET_TODOS_FETCHING = 'SET_TODOS_FETCHING',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    CREATE_TODO = 'CREATE_TODO'
}

export interface SetFetchingAction {
    type: TodoActionTypes.SET_TODOS_FETCHING;
    payload: boolean;
}

export interface FetchTodosSuccesAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS;
    payload: any[];
}

export interface FetchTodosErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR;
    payload: string;
}

export interface CreateTodo {
    type: TodoActionTypes.CREATE_TODO;
    payload: any[];
}


export type TodoAction = SetFetchingAction | FetchTodosSuccesAction | FetchTodosErrorAction | CreateTodo
                         