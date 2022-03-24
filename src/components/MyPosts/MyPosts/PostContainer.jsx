import React from 'react'
import { connect } from 'react-redux'
import { addPostActionCreators } from '../../../redux/profile-reducer'
import Post from './MyPosts'

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreators(newPostText))
    },
  }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post)

export default PostContainer