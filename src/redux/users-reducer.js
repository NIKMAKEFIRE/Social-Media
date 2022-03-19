const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        // {
        //     id: 1, 
        //     photoUrl: 'https://www.pinclipart.com/picdir/middle/351-3519113_the-rolling-stones-rolling-stones-logo-svg-clipart.png', 
        //     followed: false, fullName: 'Dmitro', status: 'I am a boss',
        //     location: { city: 'Minsk', country: 'Belarus' }
        // },

        // {
        //     id: 2, 
        //     photoUrl: 'https://www.pinclipart.com/picdir/middle/351-3519113_the-rolling-stones-rolling-stones-logo-svg-clipart.png', 
        //     followed: true, fullName: 'Sasha', status: 'I am a boss too',
        //     location: { city: 'Moscow', country: 'Russia' }
        // },

        // {
        //     id: 3, 
        //     photoUrl: 'https://www.pinclipart.com/picdir/middle/351-3519113_the-rolling-stones-rolling-stones-logo-svg-clipart.png', 
        //     followed: false, fullName: 'Andrew', status: 'Fuck you',
        //     location: { city: 'USA', country: 'New York' }
        // },
    ],
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default: return state
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer