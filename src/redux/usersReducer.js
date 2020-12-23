const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        {
            id: '1',
            photoUrl: 'https://www.flaticon.com/svg/static/icons/svg/21/21104.svg',
            fullName: 'Ivan K',
            status: 'SUPERB',
            location: {
                city: 'Minsk',
                country: 'Belarus',
            },
            isFollowed: false,
        },
        {
            id: '2',
            photoUrl: 'https://www.flaticon.com/svg/static/icons/svg/21/21104.svg',
            fullName: 'Andrew Ivanchenko',
            status: 'Working...',
            location: {
                city: 'Kiev',
                country: 'Ukraine',
            },
            isFollowed: false,
        },
        {
            id: '3',
            photoUrl: 'https://www.flaticon.com/svg/static/icons/svg/21/21104.svg',
            fullName: 'Sam Brown',
            status: 'Dont stop me now',
            location: {
                city: 'Moscow',
                country: 'Russia',
            },
            isFollowed: false,
        },
        {
            id: '4',
            photoUrl: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed00f17d4a99d0006d2e738%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D154%26cropX2%3D4820%26cropY1%3D651%26cropY2%3D5314',
            fullName: 'Kanye West',
            status: 'POTUS',
            location: {
                city: 'Washington D. C.',
                country: 'USA',
            },
            isFollowed: true,
        },

    ]

}

const usersReducer = (state = initialState, action) => {
    let stateCopy = {}
    switch (action.type) {
        case FOLLOW:
            stateCopy = {
                ...state, users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, isFollowed: true }
                    }
                    return user
                })
            }
            return stateCopy
        case UNFOLLOW:
            stateCopy = {
                ...state, users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, isFollowed: false }
                    }
                    return user
                })
            }
            return stateCopy
            case SET_USERS:
                return {
                    ...state, users: [...state.users, ...action.users],

                }
        

        default:
            return state
    }

}
export const followAC = (userId) => ({
    type: FOLLOW,
    userId,
})
export const unFollowAC = (userId) => ({
    type: UNFOLLOW,
    userId,
})
export const setUsersAC = (users) => ({
    type: SET_USERS,
    users,
})


export default usersReducer;