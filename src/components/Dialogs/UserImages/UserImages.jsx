import React from 'react'
import classes from '../Dialogs.module.css'

const UserImages = (props) => {
  return (
    <img src={props.image} id={props.id} className={classes.img} />
  )
}

export default UserImages