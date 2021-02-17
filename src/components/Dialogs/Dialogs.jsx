import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'

const Dialogs = (props) => {
    // debugger
    let dialogsElements = props.dialogsPage.dialogsData.map((elem, index) => {
        return <DialogItem name={elem.name} id={elem.id} key={index} className={elem.active ? ' '+classes.active : ''} avatar={elem.avatar} />
    });
    let messagesElements = props.dialogsPage.messagesData.map((elem, index) => <Message message={elem.message} key={index} direction={elem.direction} />)

    let onSendMessage = () => {
        props.sendMessage();   
    }

    let onMessageFieldChange = (event) => {
        let text = event.target.value;
        props.onMessageFieldChange(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={classes.messages}>
                {messagesElements}
                
            </div>
            <div></div>
            <div className={classes.addMessage}>
            <textarea name="" id="" cols="30" rows="10" className={classes.textarea}
             onChange={onMessageFieldChange} value={props.dialogsPage.newMessageText}></textarea>
            <button className={classes.buttonSend} onClick={onSendMessage}>SEND</button>
            </div>
            
        </div>
    );
}

export default Dialogs;