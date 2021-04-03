import { usersAPI } from '../api/api'
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
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
    profile: null,
}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, {
                    id: '3',
                    message: state.newPostText,
                    likesCount: '0',
                }],
                newPostText: '',
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile

            }

        default: return state

    }

}

export const addPost = () => ({ type: ADD_POST })

export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile })

export const getUserProfileThunk = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(res => {
                dispatch(setUserProfile(res.data))
            })
    }
}


export default profileReducer;