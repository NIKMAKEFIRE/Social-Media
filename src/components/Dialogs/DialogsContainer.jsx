import React from 'react'
import { connect } from 'react-redux'
import { addMessage, newMessage } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'


let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessages: () => {
            dispatch(addMessage())
        },
        updateNewMessageDate: (body) => {
            dispatch(newMessage(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer