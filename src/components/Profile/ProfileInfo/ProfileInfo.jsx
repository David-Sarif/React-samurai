import React from 'react';
import Spinner from '../../Spinner/Spinner'
import classes from './ProfileInfo.module.css';
import blankAvatar from '../../../assets/img/blank_avatar.svg';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Spinner />
    }


    return (<div>

        <div className={classes.descrBlock}>
            <p className={classes.fullName}> {props.profile.fullName} </p>
            <img className={classes.avatar}src={props.profile.photos.large ? props.profile.photos.large: blankAvatar} alt="" />
            <ProfileStatus/>
            <p> {props.profile.aboutMe}</p>
            <div>{props.profile.lookingForAJob ?
                <span className={classes.isJobReady}>Открыт к предложениям по работе</span> :
                <span className={classes.isJobNotReady}>Не ищу работу</span>
            }
            </div>
            <p>TODO social icons TODO</p>

        </div>
    </div>);
}

export default ProfileInfo