import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import UserImages from './UserImages/UserImages'

import classes from './Dialogs.module.css'


const Dialogs = (props) => {
    let dialogsElements = props.dialogPage.users
        .map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)

    let messagesElements = props.dialogPage.messages
        .map(message => <Message message={message.message} key={message.id} id={message.id} />)

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
                    value={props.dialogPage.newMessageText} />

                <button onClick={sendMessage}>Отправить</button>

                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs