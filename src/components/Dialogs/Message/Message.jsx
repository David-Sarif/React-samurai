import React from 'react';
import classes from '../Dialogs.module.css';

const Message = (props) => {
    let direction='';
    if (props.direction==='income'){
        direction='income';
    }
    if (props.direction==='outcome'){
        direction='outcome'
    }
    // debugger
    return (
        <div className={classes.message+' '+classes[direction]}>{props.message}</div>
    )
}

export default Message