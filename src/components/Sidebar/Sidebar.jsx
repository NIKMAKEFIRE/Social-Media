import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Sidebar.module.css'

import './style.css'

function Sidebar() {
    return (
        <nav className={classes.nav}>
            <div className="container">
                <ul className={classes.list}>

                    <li className={classes.item}>
                        <NavLink to="/profile">Profile</NavLink>
                    </li>

                    <li className={classes.item}>
                        <NavLink to="/messages">Messages</NavLink>
                    </li>

                    <li className={classes.item}>
                        <NavLink to="/news" >News</NavLink>
                    </li>

                    <li className={classes.item}>
                        <NavLink to="/music" >Music</NavLink>
                    </li>

                    <li className={classes.item}>
                        <NavLink to="/settings">Settings</NavLink>
                    </li>

                </ul>
               
            </div>
        </nav>
    )
}

export default Sidebar