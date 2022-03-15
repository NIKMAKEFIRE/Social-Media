import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import UserImages from './UserImages/UserImages'

import classes from './Dialogs.module.css'


const Dialogs = (props) => {
    let dialogsElements = props.state.users
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = props.state.messages
        .map(message => <Message message={message.message} id={message.id} />)

    // let userImageElement = props.state.userImage
    // .map(images => <UserImages image={images.image} id={images.id}/>)

    const sendMessage = () => {
        props.addMessages()
    }

    const onMessageChange = (e) => {
        const text = e.target.value
        props.updateNewMessageDate(text)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
                {/* {userImageElement} */}
            </div>

            <div className={classes.messages}>
                <textarea
                    placeholder='Enter your message'
                    onChange={onMessageChange}
                    value={props.state.newMessageText} />

                <button onClick={sendMessage}>Отправить</button>

                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs