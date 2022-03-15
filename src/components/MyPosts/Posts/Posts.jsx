import React from 'react'
import classes from './Posts.module.css'

const Posts = ({ message, likes }) => {

    return (
        <div className={classes.posts}>
            <div className={classes.img}></div>
            <div className={classes.item}>
                {message}
            </div>
            <div className={classes.likeBlock}>
                <div className={classes.like} />
                <span className={classes.likeText}>{likes}</span>
            </div>
        </div>
    )
}

export default Posts