import axios from 'axios';
import React from 'react';
import classes from './Users.module.css';
import blankAvatar from '../../assets/img/blank_avatar.svg';

let Users = (props) => {
    let getUsers = () => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => { props.setUsers([...res.data.items]) });

    }}

    return (<div>
        <button onClick={getUsers}>GET USERS</button>
        {
            props.users.map((user) => {
                return (<div key={user.id} >
                    <span>
                        <div>
                            <img src={user.photos.small != null ? user.photos.small : blankAvatar}
                                alt="" className={classes.avatar} />
                        </div>
                        <div>
                            {user.isFollowed ? <button onClick={() => { props.unFollow(user.id) }}
                                className={classes.button__follow}>UNFOLLOW</button> :
                                <button onClick={() => { props.follow(user.id) }}
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