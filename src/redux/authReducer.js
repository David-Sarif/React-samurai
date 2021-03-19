import { authAPI } from '../api/api'
const SET_USER_DATA = 'SET-USER-DATA';
const SET_USER_AVATAR_SMALL = 'SET-USER-AVATAR-SMALL'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    avatarSmall:null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
                
            };
        case SET_USER_AVATAR_SMALL:
            return {
                ...state,
                avatarSmall: action.response.data.photos.small,
            }  
        default:
            return state;
    }

}

export const setUserData = (id, email, login) => ({
    type: SET_USER_DATA,
    data: { id: id, email: email, login: login },
});

export const setUserAvatarSmall = (response) => ({
    type: SET_USER_AVATAR_SMALL,
    response,
}) 

export const authMeThunk = () => {
    return (dispatch) => {
        authAPI.authMe().then(res => {
            if (res.resultCode === 0) {
                let { id, email, login } = res.data
                dispatch(setUserData(id, email, login));
                authAPI.setAvatar(id)
            }
        })

    }
}

export default authReducer