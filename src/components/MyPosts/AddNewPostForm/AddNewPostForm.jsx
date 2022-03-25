import React from 'react'
import { Field } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import { Textarea } from '../../Common/FormsControls/FormsControls'

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <Field name="newPostText"
                    component={Textarea}
                    validate={[required, maxLength10]}
                    placeholder={"Введите сообщение"}
                />
                {/* <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} /> */}
                <button>Добавить</button>
            </form>
        </>
    )
}

export default AddNewPostForm