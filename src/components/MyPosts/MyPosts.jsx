import React from 'react'
import PostContainer from './Post/PostContainer'
import classes from './MyPosts.module.css'

const MyPosts = (props) => {
    return (
        <div className={classes.container}>
            <PostContainer store={props.store}/>
        </div>
    )
}

export default MyPosts