import React from 'react';
import './Header.module.css';
import classes from './Header.module.css';

const Header = () => {
    return <header className={classes.header}>
        <img src="https://git-scm.com/images/logos/downloads/Git-Icon-Black.png" alt="logo" />
    </header>

}

export default Header