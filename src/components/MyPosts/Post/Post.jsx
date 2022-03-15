import React from 'react'
import Posts from '../Posts/Posts'
import ProfileInfo from '../ProfileInfo/ProfileInfo'
import classes from './Post.module.css'

function Post(props) {
  let postElement = props.posts
    .map(post => <Posts message={post.message} likes={post.likes} />)

  const newPostElement = React.createRef()

  const onAddPost = () => {
    props.addPost()
    // props.dispatch(addPostActionCreators())
  }

  const removePost = () => alert('Удалить')

  const onPostChange = () => {
    const text = newPostElement.current.value
    props.updateNewPostText(text)
    // props.dispatch(updateNewPostActionCreators(text))
  }

  return (
    <>
      <ProfileInfo srcImg={'https://www.pinclipart.com/picdir/middle/351-3519113_the-rolling-stones-rolling-stones-logo-svg-clipart.png'} />
      <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
      <button onClick={onAddPost} className={classes.btn}>Добавить</button>
      <button onClick={removePost} className={classes.btn}>Удалить</button>

      {postElement}
    </>
  )
}

export default Post