import React from 'react'
import classes from './Header.module.css'

function Header() {
  return ( 
      <div className={classes.header}>
        <img className={classes.img}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQva_sHsMKH0SirWFOulRg4Ve0I4cyetMzBIA&usqp=CAU" 
        alt="logo"
        />
        <a href="#s">Home</a> 
        <a href="#s">New Feeds</a> 
        <a href="#s">Messages</a>
    </div>
  )
}

export default Header