import React from 'react'
import { reduxForm } from 'redux-form'
import Posts from '../Posts/Posts'
import ProfileInfo from '../ProfileInfo/ProfileInfo'
import classes from './Post.module.css'
import AddNewPostForm from '../AddNewPostForm/AddNewPostForm'

function Post(props) {
  let postElement = props.posts
    .map(post => <Posts message={post.message} likes={post.likes} />)

  const newPostElement = React.createRef()

  const removePost = () => alert('Удалить')

  const onPostSubmit = (value) => {
    props.addPost(value.newPostText)
  }

  return (
    <>
      <ProfileInfo srcImg={'https://www.pinclipart.com/picdir/middle/351-3519113_the-rolling-stones-rolling-stones-logo-svg-clipart.png'} />
      <AddNewPostFormRedux onSubmit={onPostSubmit} />
      <button onClick={removePost} className={classes.btn}>Удалить</button>
      {postElement}
    </>
  )
}


const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

export default Post