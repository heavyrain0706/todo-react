import React, { FC } from "react"; 
import Header from "../Header/Header";
import Items from "../Items/Items";
import classes from './Box.module.scss'
 
const Box: FC = () => { 
    return (
        <div className={classes.box}>
            <h1 className={classes.box__title}>TASKS TO DO</h1>
            <Header />
            <Items />
        </div>
    ) 
} 
 
export default Box;