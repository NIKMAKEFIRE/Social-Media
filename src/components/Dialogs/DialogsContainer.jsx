import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/WithAuthRedirect'
import { addMessage } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'


let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessages: (newMessageText) => {
            dispatch(addMessage(newMessageText))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)