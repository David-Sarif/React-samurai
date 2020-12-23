import React from 'react';
// import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return <main>
        <ProfileInfo />
        <MyPostsContainer/>
    </main>
}

export default Profile