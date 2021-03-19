import * as axios from 'axios'

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers:{'API-KEY':'f5df9f5c-e4a4-4916-99c2-a442891caf5a'}

})

export const subscribe = () => {

}



export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 7) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(res => res.data)
    },
    unSubscribe(id) {
        return instance.delete(`follow/${id}`).then(res => res.data.resultCode)
    },
    subscribe(id) {
        return instance.post(`follow/${id}`).then(res => res.data.resultCode)
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`).then(res => res.data)
    },
    setAvatar(id) {
        return instance.get(`profile/`+id).then(res => res.data.photos.small)
    }
}


