import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'eb48bb2e-6a65-44b0-b33e-bc9cd2c3f9d8'
    }
})



export const profileApi = {
    getProfileInfo(userId) {
        return instance
            .get(`profile/${userId}`)
            .then(response => response.data)
    }
}



export const usersApi = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    getMe() {
        return instance
            .get(`auth/me`)
            .then(response => response.data)
    }
}



export const followApi = {
    getUnfollow(id) {
        return instance
            .delete(`follow/${id}`)
            .then(response => response.data)
    },

    getFollow(id) {
        return instance
            .post(`follow/${id}`, {})
            .then(response => response.data)
    }
}