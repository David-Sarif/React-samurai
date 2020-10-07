import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={classes.dialog + props.className}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}
const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}
const Dialogs = (props) => {

    let dialogsData = [{
        id: '1',
        name: 'Ivan',
        className:` ${classes.active}`,
    },
    {
        id: '2',
        name: 'Dimon'
    },
    {
        id: '3',
        name: 'Semen',
    },
    {
        id: '4',
        name: 'Oleg'
    },];

    let messagesData = [{
        id: '1',
        message: 'hi',
    },
    {
        id: '2',
        message: 'hello'
    },
    {
        id: '3',
        message: 'whatcha doing',
    },
    {
        id: '4',
        message: 'kinda nothing'
    },]

    let dialogsElements = dialogsData.map((elem, index) => {
        return <DialogItem name={elem.name} id={elem.id} key={index} className={elem.className} />
    });
    let messagesElements = messagesData.map((elem,index) => <Message message={elem.message} key={index}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
               
            </div>
            <div className={classes.messages}>
            {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;