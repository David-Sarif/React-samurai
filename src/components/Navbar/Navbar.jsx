import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
import FriendOnline from './FriendOnline/FriendOnline';
const Navbar = (props) => {
    let friendsOnline=props.state.friendsOnline.map((elem,index) => {
        return <FriendOnline name={elem.name} avatar={elem.avatar} key={index}/>
    });
    return <nav className={classes.nav}>
        <ul>
            <li className={classes.item}><NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink></li>
            <li className={classes.item}><NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink></li>
            <li className={classes.item}><NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink></li>
            <li className={classes.item}><NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink></li>
            <li className={classes.item}><NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink></li>
        </ul>
        <div className={classes.friendsOnline}>
            FRIENDS ONLINE
            <ul>
                {friendsOnline}
            </ul>
        </div>
    </nav>
}

export default Navbar