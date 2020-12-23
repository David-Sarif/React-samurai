import React from 'react';
import Dialogs from './Dialogs'
import { sendMessageActionCreator, onMessageFieldChangeActionCreator } from '../../redux/dialogsReducer'
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        messageFieldChange: (text) => {dispatch(onMessageFieldChangeActionCreator(text))},
        sendMessage: () => {dispatch(sendMessageActionCreator())},
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;