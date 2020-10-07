import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_640.png" alt="" />
            {props.message}
            <div>
                <span> {props.likesCount} likes</span>
            </div>
        </div>

    )

}

export default Post