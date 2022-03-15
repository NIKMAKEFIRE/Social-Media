const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
    posts: [
        { message: 'Hi there!', id: 1, likes: 100 },
        { message: 'This is my first post!', id: 2, likes: 239 },
    ],
    newPostText: 'текст из state',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const post = {
                message: state.newPostText,
                id: 3,
                likes: 932
            }
            state.posts.push(post)
            state.newPostText = ''
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state

        default: return state
    }
}

export const addPostActionCreators = () => ({ type: ADD_POST })
export const updateNewPostActionCreators = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer