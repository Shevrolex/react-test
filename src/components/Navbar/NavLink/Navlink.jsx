import React from 'react';
import classes from './../Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navlink = (props) => {
    return (
        <div className={classes.item}>
            <NavLink to={props.path} className={navData => navData.isActive ? classes.active : classes.item}>{props.item}</NavLink>
        </div>
    )
}

export default Navlink;