// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import classes from './Navbar.module.css';
// import FriendOnline from './FriendOnline/FriendOnline';
// import StoreContext from '../../StoreContext';
import { connect } from 'react-redux';
import Navbar from './Navbar'
// const Navbar = (props) => {
//     return (
//         <StoreContext.Consumer>{ (store) => {
//                 let state = store.getState();
//                 let friendsOnline = state.sidebar.friendsOnline.map((elem, index) => {
//                     return <FriendOnline name={elem.name} avatar={elem.avatar} key={index} />
//                 });
//                 return (<nav className={classes.nav}>
//                     <ul>
//                         <li className={classes.item}><NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink></li>
//                         <li className={classes.item}><NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink></li>
//                         <li className={classes.item}><NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink></li>
//                         <li className={classes.item}><NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink></li>
//                         <li className={classes.item}><NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink></li>
//                     </ul>
//                     <div className={classes.friendsOnline}>
//                         FRIENDS ONLINE
//             <ul>
//                             {friendsOnline}
//                         </ul>
//                     </div>
//                 </nav>)
//             }}
//         </StoreContext.Consumer>)
// }
const mapStateToProps = (state) => {
    return {
        friendsOnline: state.sidebar.friendsOnline
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
const NavbarContainer = connect(mapStateToProps,mapDispatchToProps)(Navbar)
export default NavbarContainer