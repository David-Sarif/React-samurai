import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.module.css';
import classes from './Header.module.css';
import blankAvatar from '../../assets/img/blank_avatar.svg';

const Header = (props) => {
    return <header className={classes.header}>
        <img src="https://git-scm.com/images/logos/downloads/Git-Icon-Black.png" alt="logo" />
        <div className={classes.loginWrapper}>
            {props.isAuth ?
                <> <p> {props.login}</p>
                    <img className={classes.avatarSmall} src={props.avatarSmall ? props.avatarSmall : blankAvatar} alt='avatarSmall'></img></> :
                <NavLink to='/login'> Login </NavLink>
            }



        </div>
    </header>

}

export default Header