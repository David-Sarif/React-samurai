import { usersAPI } from '../api/api'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'


let initialState = {
    users: [],
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],

}

const usersReducer = (state = initialState, action) => {
    let stateCopy = {}
    switch (action.type) {
        case FOLLOW:
            stateCopy = {
                ...state, users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            }
            return stateCopy;
        case UNFOLLOW:
            stateCopy = {
                ...state, users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            }
            return stateCopy;
        case SET_USERS:
            return {
                ...state, users: action.users,

            }

        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,

                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }

}
export const follow = (userId) => ({
    type: FOLLOW,
    userId,
})
export const unFollow = (userId) => ({
    type: UNFOLLOW,
    userId,
})
export const setUsers = (users) => ({
    type: SET_USERS,
    users,
})

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
})
export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
})

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
})
export const toggleFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId,
})

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(res => {

            dispatch(setUsers([...res.items]));

            dispatch(setTotalUsersCount(res.totalCount));
            dispatch(toggleIsFetching(false));

        });
    }
}

export const followThunk = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, id));
        usersAPI.subscribe(id).then(
            res => {
                if (res === 0) {
                    dispatch(follow(id))

                }
                dispatch(toggleFollowingInProgress(false, id));
            }
        )
    }
}
export const unFollowThunk = (id) => {
    return (dispatch) => {

    dispatch(toggleFollowingInProgress(true, id));
    usersAPI.unSubscribe(id).then(
        res => {
            if (res === 0) {
                dispatch(unFollow(id))

            }
            dispatch(toggleFollowingInProgress(false, id));
        }
    )}

}
export default usersReducer;