import * as axios from 'axios';

const baseUrl = 'https://social-network.samuraijs.com/api/1.0'

export const getUsers = (currentPage = 1, pageSize = 5) => {
    return axios
        .get(baseUrl + `/users?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials: true,
            })
        .then(response => response.data)
}

export const getMe = () => {
    return axios
        .get(baseUrl + `/auth/me`, {
            withCredentials: true,
        })
        .then(response => response.data)
}