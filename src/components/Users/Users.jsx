import React from 'react'
import { NavLink } from 'react-router-dom'
import userImg from '../../assets/images/user_icon.png'
import styles from './Users.module.css'

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <>
            <div className={styles.numbers}>
                {pages.map(page => {
                    return <span
                        className={props.currentPage === page && styles.selected}
                        onClick={(e) => { props.onPageChanged(page) }}
                    >{page}</span>
                })}
            </div>
            {
                props.users.map(user =>
                    <div key={user.id}>
                        <span className={styles.block}>
                            <div>
                                <NavLink to={`/profile${user.id}`} >
                                    <img
                                        className={styles.img}
                                        src={user.photos.small != null ? user.photos.small : userImg} />
                                </NavLink>
                            </div>
                            <div>
                                {
                                    user.followed
                                        ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                                        : <button onClick={() => { props.follow(user.id) }}>Follow</button>
                                }

                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{'user.location.city'}</div>
                                <div>{'user.location.country'}</div>
                            </span>
                        </span>
                    </div>)
            }
        </>
    )
}

export default Users