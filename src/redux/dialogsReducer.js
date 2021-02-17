const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [{
        id: '1',
        name: 'Ivan',
        active: true,
        avatar: "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_640.png",
    },
    {
        id: '2',
        name: 'Dimon',
        avatar: "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_640.png",
    },
    {
        id: '3',
        name: 'Semen',
        avatar: "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_640.png",
    },
    {
        id: '4',
        name: 'Oleg',
        avatar: "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_640.png",
    },],
    messagesData: [{
        id: '1',
        message: 'hi',
        direction: 'outcome',
    },
    {
        id: '2',
        message: 'hello',
        direction: 'income',
    },
    {
        id: '3',
        message: 'whatcha doing',
        direction: 'outcome',
    },
    {
        id: '4',
        message: 'kinda nothing',
        direction: 'income',
    },],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:

            return {
                ...state,
                messagesData: [...state.messagesData, {
                    id: '4',
                    message: state.newMessageText,
                    direction: 'outcome',
                }],
                newMessageText: '',
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return{
                ...state,
                newMessageText: action.newText,
            }
        default:
            return state
    }

}

export const sendMessage = () => ({ type: SEND_MESSAGE })


export const onMessageFieldChange = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default dialogsReducer