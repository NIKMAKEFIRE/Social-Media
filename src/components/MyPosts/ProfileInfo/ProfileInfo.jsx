import React from 'react'
import Preloader from '../../Common/Preloader/Preloader'
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader/>
    }

    return (
        <>
            <div className={classes.container}>
                {/* <img src={props.srcImg} className={classes.img} /> */}
                <img src={props.profile.photos.small} className={classes.img}/>
                <h1>{props.profile.fullName}</h1>
            </div>
            <h1>{props.profile.aboutMe}</h1>
            {/* <h1>My Posts</h1> */}
        </>
    )
}

export default ProfileInfo