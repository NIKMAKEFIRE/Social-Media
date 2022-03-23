import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/WithAuthRedirect'
import { addMessage, newMessage } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'


let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)