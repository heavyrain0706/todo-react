import { Modal } from "antd";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { TodosActionCreators } from "../../store/todo/actionCreators";
import { ITodo } from "../../store/todo/models/ITodo";
import classes from './Item.module.scss'

interface ItemProps {
    todo: ITodo
}
 
const Item: FC<ItemProps> = ({todo}) => { 

    const dispatch = useDispatch()
    const [isModalVisible, setIsModalVisible] = useState(false);


    const deleteItemFunc = (e: React.MouseEvent<HTMLButtonElement>) => {
        let storage: ITodo[] = JSON.parse(localStorage.getItem('tasks') || '{}')
        let storageAfterDelete = storage.filter(storageElement => storageElement.id !== todo.id)
        localStorage.setItem('tasks', JSON.stringify(storageAfterDelete))
        dispatch(TodosActionCreators.loadTodos(storageAfterDelete))
    }

    const openItemFunc = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsModalVisible(true);
    }

    const chekboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let storage: ITodo[] = JSON.parse(localStorage.getItem('tasks') || '{}')
        const current = storage.find(storageTodo => storageTodo.id === todo.id)
        if(current) {
            current.completed = !current.completed
            localStorage.setItem('tasks', JSON.stringify(storage))
            dispatch(TodosActionCreators.loadTodos(storage))
        }
    }

    return (
        <label className={classes.todo__item}>
            <input className={classes.todo__itemCheckbox} type='checkbox' checked={todo.completed ? true : false} onChange={chekboxHandler}/>
            <span className={classes.todo__itemCheckStyle}></span>
            <div className={todo.completed ? classes.todo__titleСrossed  : classes.todo__title}>
                {todo.title}
            </div>
            <div className={classes.item__buttons}>
                 <button onClick={openItemFunc} className={classes.todo__open_btn}>
                    <svg width="14" height="14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" className="svg-inline--fa fa-eye fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#9C71C8" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
                    </svg>
                </button>
                <button onClick={deleteItemFunc} className={classes.todo__del_btn}>
                    <svg width="14" height="14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" className="svg-inline--fa fa-trash fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#9C71C8" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path>
                    </svg>
                </button>
            </div>
            <Modal title="Details" visible={isModalVisible} onOk={() => setIsModalVisible(false)} onCancel={() => setIsModalVisible(false)}>
                <p>{todo.title}</p>
            </Modal>
        </label> 
    ) 
} 
 
export default Item;