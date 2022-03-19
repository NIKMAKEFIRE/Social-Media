import axios from 'axios'
import React from 'react'
import userImg from '../../assets/images/user_icon.png'
import styles from './Users.module.css'

const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items)

                })
        }
    }

    return (
        <>
        <button style={{marginTop: '20px'}} 
        onClick={getUsers}>Get Users</button>
            {
                props.users.map(user =>
                    <div key={user.id}>
                        <span>
                            <div>
                                <img
                                    className={styles.img}
                                    src={user.photos.small != null ? user.photos.small : userImg} />
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