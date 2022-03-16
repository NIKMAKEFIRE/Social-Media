import React from 'react'
import { connect } from 'react-redux'
import { addPostActionCreators, updateNewPostActionCreators } from '../../../redux/profile-reducer'
import Post from './Post'

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreators())
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostActionCreators(text))
    }
  }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post)

export default PostContainer