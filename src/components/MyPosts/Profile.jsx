import React from 'react'
import PostContainer from './Post/PostContainer'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return (
        <div className={classes.container}>
            <ProfileInfo profile={props.profile}/>
            <PostContainer />
        </div>
    )
}

export default Profile