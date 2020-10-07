import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';

const Profile = () => {
    return <main>
        
        <ProfileInfo/>
        <MyPosts/>
    </main>
}

export default Profile