import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import classes from './Dialogs.module.css'
import { reduxForm } from 'redux-form'
import AddMessageForm from './AddMessageForm/AddMessageForm'

const Dialogs = (props) => {
    let dialogsElements = props.dialogPage.users
        .map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)

    let messagesElements = props.dialogPage.messages
        .map(message => <Message message={message.message} key={message.id} id={message.id} />)

    const addNewMessage = (values) => {
        console.log(values.newMessageText);
        props.addMessages(values.newMessageText)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
                {/* {userImageElement} */}
            </div>

            <div className={classes.messages}>
                <AddMessageFormRedux onSubmit={addNewMessage} />
                {messagesElements}
            </div>
        </div>
    )
}



const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs