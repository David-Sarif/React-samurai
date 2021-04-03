// import React from 'react'
import Dialogs from './Dialogs'
import { sendMessage, onMessageFieldChange } from '../../redux/dialogsReducer'
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}


// const DialogsContainer = connect(mapStateToProps, {sendMessage,onMessageFieldChange})(Dialogs)

// let AuthRedirectComponent = withAuthRedirect(DialogsContainer)


export default compose(
    connect(mapStateToProps, {sendMessage,onMessageFieldChange}),
    withAuthRedirect,
)(Dialogs);