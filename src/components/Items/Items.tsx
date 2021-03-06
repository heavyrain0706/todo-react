import { FC, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { TodosActionCreators } from "../../store/todo/actionCreators"
import Item from "../Item/Item"
import classes from './Items.module.scss'


const Items: FC = () => { 
    const {todos} = useTypedSelector(state => state.todoReducer)
    const dispatch = useDispatch()  


    useEffect( () => {
        const tasksFromStorage = JSON.parse(localStorage.getItem('tasks') || '{}');
        if (Array.isArray(tasksFromStorage) && tasksFromStorage.length > 0) {
            dispatch(TodosActionCreators.loadTodos(tasksFromStorage))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return ( 
        <div className={classes.todos}>
            {todos?.length ?
                todos.map(todo => 
                    <Item key={todo.id} todo={todo}/>
                ) : <span className={classes.noTasks}>Нету заданий</span>
            }
        </div>
    ) 
} 
 
export default Items;