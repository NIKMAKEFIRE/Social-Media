const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const message = {
                message: state.newMessageText,
                id: 4,
            }
            return  {
                ...state,
                newMessageText: '',
                messages: [...state.messages, message],
            }

        case UPDATE_NEW_MESSAGE:
            return  {
                ...state,
                newMessageText: action.newText
            }

        default: return state
    }
}

export const addMessage = () => ({ type: ADD_MESSAGE })
export const newMessage = (text) => ({ type: UPDATE_NEW_MESSAGE, newText: text })

export default dialogsReducer