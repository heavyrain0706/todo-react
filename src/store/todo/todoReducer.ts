import { TodoState, TodoAction, TodoActionTypes } from './types/todos';


const initialState: TodoState = {
    todos: [],
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.LOAD_TODOS:
            return { ...state, todos: action.payload}
        case TodoActionTypes.CREATE_TODO:
            return { ...state, todos:[...state.todos, action.payload] }
        default:
            return state
    }
}