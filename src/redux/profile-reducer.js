import { usersAPI } from "../API/Api"

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        { message: 'Hi there!', id: 1, likes: 100 },
        { message: 'This is my first post!', id: 2, likes: 239 },
    ],
    newPostText: 'текст из state',
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const post = {
                message: state.newPostText,
                id: 3,
                likes: 932
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, post]
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

export const addPostActionCreators = () => ({ type: ADD_POST })
export const updateNewPostActionCreators = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}

export default profileReducer