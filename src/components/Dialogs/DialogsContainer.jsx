import React from 'react';
import Dialogs from './Dialogs'
import { sendMessageActionCreator, onMessageFieldChangeActionCreator } from '../../redux/dialogsReducer'
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>

            {(store) => {
            let state = store.getState();
            let sendMessage = () => {
                store.dispatch(sendMessageActionCreator())
            }   
            let messageFieldChange = (text) => {
                store.dispatch(onMessageFieldChangeActionCreator(text))
            } 
                return (<Dialogs dialogsPage={state.dialogsPage} sendMessage={sendMessage}
                    messageFieldChange={messageFieldChange} />)
            }}
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;