import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    // baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '75dcc0c0-c882-4cd4-be38-0c0419ad4ad5'
    }
})

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    getProfile(userId){
       return instance.get('https://social-network.samuraijs.com/api/1.0/profile/'+ userId)
    }
}

export const authAPI = {
    me() {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
    },
}

