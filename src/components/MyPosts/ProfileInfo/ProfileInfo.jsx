import React from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <>
            <div className={classes.container}>
                <img src={props.srcImg} className={classes.img} />
                <h1>James Jones</h1>
            </div>
            
            <h1>My Posts</h1>
        </>
    )
}

export default ProfileInfo