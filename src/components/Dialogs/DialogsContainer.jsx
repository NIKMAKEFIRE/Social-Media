import React from 'react'
import { addMessage, newMessage } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'


const DialogsContainer = (props) => {
    let state = props.store.getState()

    const sendMessage = () => {
        props.store.dispatch(addMessage())
    }

    const onMessageChange = (text) => {
        const action = newMessage(text)
        props.store.dispatch(action)
    }

    return <Dialogs 
    addMessages={sendMessage} 
    updateNewMessageDate={onMessageChange}
    state={state.dialogPage}
    />
}

export default DialogsContainer