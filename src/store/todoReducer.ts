import { TodoState, TodoAction, TodoActionTypes } from '../types/todos';


const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.SET_TODOS_FETCHING:
            return { ...state, loading: true}
        case TodoActionTypes.FETCH_TODOS_SUCCESS:
            return { ...state, loading: false, todos: action.payload }
        case TodoActionTypes.FETCH_TODOS_ERROR:
            return { ...state, loading: false, error: action.payload }
        case TodoActionTypes.CREATE_TODO:
            return { ...state, todos:[...state.todos, action.payload] }
        default:
            return state
    }
}