import { FetchTodosSuccesAction, FetchTodosErrorAction, CreateTodo, SetFetchingAction } from './../types/todos';
import { TodoActionTypes } from "../types/todos"
import { AppDispatch } from '.';
import TodosService from '../API/TodosService';

export const TodosActionCreators = {
    setIsFethcing: (payload: boolean): SetFetchingAction => ({type: TodoActionTypes.SET_TODOS_FETCHING, payload}),
    fetchSuccess: (payload: any[]): FetchTodosSuccesAction => ({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload}),
    fetchError: (payload: string): FetchTodosErrorAction => ({type: TodoActionTypes.FETCH_TODOS_ERROR, payload}),
    createTodo: (payload: any): CreateTodo => ({type: TodoActionTypes.CREATE_TODO, payload}),

    fetchTodos: (storageArray?: any[]) => async (dispatch: AppDispatch) => {
        try {
            dispatch(TodosActionCreators.setIsFethcing(true))
            const response = await TodosService.getTodos()
            dispatch(TodosActionCreators.fetchSuccess(storageArray ? [...response.data ,...storageArray] : response.data))
        } catch (e) {
            dispatch(TodosActionCreators.fetchError('ошибка'))
        }
    }
}