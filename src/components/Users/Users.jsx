import React from 'react'
import axios from 'axios'
import userImg from '../../assets/images/user_icon.png'
import styles from './Users.module.css'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => this.props.setUsers(response.data.items))
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <>
                <div className={styles.numbers}>
                    {pages.map(page => {
                        return <span
                            className={this.props.currentPage === page && styles.selected}
                            onClick={(e) => {this.onPageChanged(page)}}
                        >{page}</span>
                    })}
                </div>
                {
                    this.props.users.map(user =>
                        <div key={user.id}>
                            <span className={styles.block}>
                                <div>
                                    <img
                                        className={styles.img}
                                        src={user.photos.small != null ? user.photos.small : userImg} />
                                </div>
                                <div>
                                    {
                                        user.followed
                                            ? <button onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button>
                                            : <button onClick={() => { this.props.follow(user.id) }}>Follow</button>
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
}

export default Users