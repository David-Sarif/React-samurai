import React from 'react';
import classes from '../Navbar.module.css';

const FriendOnline = (props) => {
    return (
        <li className={classes.friendsOnline_item}><img src={props.avatar} alt="" />
            <p> {props.name}</p></li>)
};

export default FriendOnline