import axios from 'axios';
import React from 'react';
import classes from './Users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => { props.setUsers([...res.data.items]) });

    }

    return (<div>
        {
            props.users.map((user) => {
                return (<div key={user.id} >
                    <span>
                        <div>
                            <img src={user.photos.small != null ? user.photos.small : "https://www.flaticon.com/svg/static/icons/svg/21/21104.svg"}
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