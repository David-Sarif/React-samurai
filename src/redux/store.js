import profileReducer from "./profileReducer";
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer'


let store = {
    _state: {
        profilePage: {
            postsData: [{
                id: '1',
                message: 'hi',
                likesCount: '22'
            }, {
                id: '2',
                message: 'nice post',
                likesCount: '7'
            }],
            newPostText: '',
        },

        messagesPage: {
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
        },

        sidebar: {
            friendsOnline: [
                {
                    name: 'Semen',
                    avatar: "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_640.png",
                },
                {
                    name: 'Ivan',
                    avatar: "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_640.png",
                },
                {
                    name: 'Oleg',
                    avatar: "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_640.png",
                },
            ]
            ,
        },

    },

    _callSubscriber() {
        console.log('called subscriber');
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

}

window.store = store;

export default store;