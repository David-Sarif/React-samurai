import React from 'react';
import classes from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: '1',
                photoUrl: 'https://www.flaticon.com/svg/static/icons/svg/21/21104.svg',
                fullName: 'Ivan K',
                status: 'SUPERB',
                location: {
                    city: 'Minsk',
                    country: 'Belarus',
                },
                isFollowed: false,
            },
            {
                id: '2',
                photoUrl: 'https://www.flaticon.com/svg/static/icons/svg/21/21104.svg',
                fullName: 'Andrew Ivanchenko',
                status: 'Working...',
                location: {
                    city: 'Kiev',
                    country: 'Ukraine',
                },
                isFollowed: false,
            },
            {
                id: '3',
                photoUrl: 'https://www.flaticon.com/svg/static/icons/svg/21/21104.svg',
                fullName: 'Sam Brown',
                status: 'Dont stop me now',
                location: {
                    city: 'Moscow',
                    country: 'Russia',
                },
                isFollowed: false,
            },
            {
                id: '4',
                photoUrl: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed00f17d4a99d0006d2e738%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D154%26cropX2%3D4820%26cropY1%3D651%26cropY2%3D5314',
                fullName: 'Kanye West',
                status: 'POTUS',
                location: {
                    city: 'Washington D. C.',
                    country: 'USA',
                },
                isFollowed: true,
            },

        ]);
    }

    return (<div>
        {
            props.users.map((user) => {
                return (<div key={user.id} >
                    <span>
                        <div>
                            <img src={user.photoUrl} alt="" className={classes.avatar} />
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
                                {user.fullName}
                            </div>
                            <div>
                                {user.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {user.location.city}
                            </div>
                            <div>
                                {user.location.country}
                            </div>
                        </span>
                    </span>
                </div>)
            })
        }
    </div>)
}

export default Users