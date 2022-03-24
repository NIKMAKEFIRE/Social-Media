import React from 'react'
import { reduxForm } from 'redux-form'
import { Field } from 'redux-form'
import Posts from '../Posts/Posts'
import ProfileInfo from '../ProfileInfo/ProfileInfo'
import classes from './Post.module.css'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import { Textarea } from '../../Common/FormsControls/FormsControls'

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

const maxLength = maxLengthCreator(10)

const AddNewPostForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <Field name="newPostText"
          component={Textarea}
          validate={[required, maxLength]}
          placeholder={"Введите сообщение"}
        />
        {/* <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} /> */}
        <button className={classes.btn}>Добавить</button>
      </form>
    </>
  )
}

const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

export default Post