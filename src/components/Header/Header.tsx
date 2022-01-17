import { Alert } from "antd";
import React, { FC, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { TodosActionCreators } from "../../store/actionCreators";
import { ITodo } from "../../types/ITodo";
import classes from './Header.module.scss'
 
const Header: FC = () => {

    const dispatch = useDispatch()
    const [mytodo, setMyTodo] = useState<string>('')
    const [showInputError, setShowInputError] = useState<boolean>(false)

    const inputElement: any = useRef()

    const typeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMyTodo(e.target.value)
    }

    const pushTask = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (inputElement.current.value === '') {
            console.log('Show error init')
            setShowInputError(true)
        } else {
            let tasksFromStorage = JSON.parse(localStorage.getItem('tasks') || '{}')
            let newTodo: ITodo = {
                id: Date.now(),
                title: mytodo,
                completed: false
            }
            if (Array.isArray(tasksFromStorage)) {
                tasksFromStorage.push(newTodo)
            } else {
                tasksFromStorage = []
                tasksFromStorage.push(newTodo)
            }

            //Push myTask to redux
            dispatch(TodosActionCreators.createTodo(newTodo))
            //Push myTask to storage
            localStorage.setItem('tasks', JSON.stringify(tasksFromStorage))
            setMyTodo('')
        }
    }

    return ( 
        <div className={classes.header__wrapper }>
            {showInputError &&
                      <Alert
                      message="Error"
                      description="Please make sure you enter the text"
                      type="error"
                      showIcon
                      closable
                      onClick={() => setShowInputError(false)}
                      style={{marginBottom: 20, borderRadius: 20, color: '#fff', fontWeight: '700', backgroundColor: '#9C71C8', border: 'none'}}
                  />
            }
            <input onChange={typeTask} value={mytodo} ref={inputElement} className={classes.box__input} placeholder="type a task" />
            <button className={classes.add__btn} onClick={pushTask}>
                ADD A TASK
            </button>
        </div> 
    ) 
} 
 
export default Header;