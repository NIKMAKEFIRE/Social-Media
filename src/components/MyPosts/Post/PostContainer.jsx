import React from 'react'
import { addPostActionCreators, updateNewPostActionCreators } from '../../../redux/profile-reducer'
import Post from './Post'

function PostContainer(props) {
  let state = props.store.getState()

  const addPost = () => {
    props.store.dispatch(addPostActionCreators())
  }

  const onPostChange = (text) => {
    const action = updateNewPostActionCreators(text)
    props.store.dispatch(action)
  }

  // posts={props.profilePage.posts} 
  // newPostText={props.profilePage.newPostText} 
  // dispatch={props.dispatch}

  return <Post 
  updateNewPostText={onPostChange} 
  addPost={addPost} 
  posts={state.profilePage.posts}
  newPostText={state.profilePage.newPostText} 

  />
 
}

export default PostContainer