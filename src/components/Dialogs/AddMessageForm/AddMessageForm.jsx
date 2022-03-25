import React from 'react'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import { Field } from 'redux-form'
import { Textarea } from '../../Common/FormsControls/FormsControls'

const maxLength10 = maxLengthCreator(10)

const AddMessageForm = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <Field
                    name="newMessageText"
                    component={Textarea}
                    type="text"
                    validate={[required, maxLength10]}
                    placeholder="Enter your message" />
                <button>Отправить</button>
            </form>
        </>
    )
}
export default AddMessageForm