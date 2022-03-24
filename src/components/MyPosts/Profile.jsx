import React from 'react'
import PostContainer from './MyPosts/PostContainer'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return (
        <div className={classes.container}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <PostContainer />
        </div>
    )
}

export default Profile