import React from 'react'
import s from'./Spinner.module.css'

let Spinner = (props) =>{
    return (
        <div className={s.spinner_out}><div className={s.spinner_in}>
            <div></div>
            <div></div>
            <div><div></div></div>
            <div><div></div></div>
        </div></div>

    )
}

export default Spinner