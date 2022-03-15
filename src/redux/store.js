import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {

        dialogPage: {
            users: [
                { name: 'James', id: 1 },
                { name: 'Kobe', id: 2 },
                { name: 'Max', id: 3 },
                { name: 'Alex', id: 4 },
            ],
            messages: [
                { message: 'Hi', id: 1 },
                { message: 'How are you?', id: 2 },
                { message: 'What are you doing?', id: 3 }
            ],
            userImage: [
                { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Uniswap_Logo.svg/800px-Uniswap_Logo.svg.png', id: 1 },
                { image: 'https://logowik.com/content/uploads/images/shiba-inu-coin3868.jpg', id: 2 },
                { image: 'https://st3.depositphotos.com/3744091/17380/v/1600/depositphotos_173808326-stock-illustration-vector-illustration-of-creativity-and.jpg', id: 3 },
                { image: 'https://seeklogo.com/images/T/telegram-minimal-logo-2F6E632BF2-seeklogo.com.png', id: 4 },
            ],
            newMessageText: ''
        },

        profilePage: {
            posts: [
                { message: 'Hi there!', id: 1, likes: 100 },
                { message: 'This is my first post!', id: 2, likes: 239 },
            ],
            newPostText: 'текст из state',
        },

        sidebar: {}

    },
    _callSubscriber() {
        console.log('state has been changed');
    },


    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },


    dispatch(action) { // { type: 'ADD_POST' }

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }

}


export default store
window.store = store