import React from 'react';
import classes from './Users.module.css';
import blankAvatar from '../../assets/img/blank_avatar.svg';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

let Users = (props) => {

    let pagesCount = Math.ceil((props.totalUsersCount / 50) / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div className={classes.pagination}>
                {pages.map((page, index) => {
                    return (<span className={props.currentPage === page ? classes.selectedPage : undefined}
                        onClick={(e) => props.onPageChange(page)} key={index}>
                        {page}
                    </span>)
                })}
            </div>
            {
                props.users.map((user) => { 
                    return (<div key={user.id} >
                        <span>
                            <div>
                                <NavLink to={'/profile' + user.id}>
                                    <img src={user.photos.small != null ? user.photos.small : blankAvatar}
                                        alt="" className={classes.avatar} />
                                </NavLink>
                            </div>
                            <div>
                                {user.followed ?
                                    <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, { withCredentials: true, headers:{'API-KEY':'f5df9f5c-e4a4-4916-99c2-a442891caf5a'} }).then(
                                            res => {
                                                if (res.data.resultCode === 0) {
                                                    props.unFollow(user.id)
                                                }
                                            }
                                        )

                                    }}
                                        className={classes.button__follow}>UNFOLLOW</button> :
                                    <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, { withCredentials: true, headers:{"API-KEY":"f5df9f5c-e4a4-4916-99c2-a442891caf5a"} }).then(
                                            res => {
                                                if (res.data.resultCode === 0) {
                                                    props.follow(user.id)

                                                }
                                            }
                                        )




                                    }}
                                        className={classes.button__follow}>FOLLOW</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>
                                    {user.name}
                                </div>
                                <div>
                                    {user.status}
                                </div>
                            </span>
                            <span>
                                <div>
                                    {'user.location.city'}
                                </div>
                                <div>
                                    {'user.location.country'}
                                </div>
                            </span>
                        </span>
                    </div>)
                })
            }
        </div>)
}

export default Users