import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import classes from './Header.module.css'

function Header(props) {
  return (
    <div className={classes.header}>
      <img className={classes.img}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQva_sHsMKH0SirWFOulRg4Ve0I4cyetMzBIA&usqp=CAU"
        alt="logo"
      />
      <div className={classes.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Логин</NavLink>}
      </div>
    </div>
  )
}

export default Header