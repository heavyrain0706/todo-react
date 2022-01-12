import { FC, useEffect } from "react"; 
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { TodosActionCreators } from "../../store/actionCreators";
import Item from "../Item/Item";


const Items: FC = () => { 
    const {todos, loading, error} = useTypedSelector(state => state.todoReducer)
    const dispatch = useDispatch()  

    // @ts-ignore
    const tasksFromStorage = JSON.parse((localStorage.getItem('tasks')));

    useEffect( () => {
        dispatch(TodosActionCreators.fetchTodos(tasksFromStorage))
    }, [])

    if(loading) {
        return <h1>Идет загрузка...</h1>
    }

    if(error) {
        return <h1>{error}</h1>
    }

    return ( 
        <div>
            {todos?.length && todos.map(todo => 
                <Item id={todo.id} key={todo.id} title={todo.title}/>
            )}
        </div>
    ) 
} 
 
export default Items;