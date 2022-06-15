import React from 'react';
import Friend from './Friend/Friend';
import classes from './Friends.module.css';

const Friends = (props) => {

    let friends = props.state.map( p => <Friend name={p.name} /> );

    return (
        <div>
            <h2>Friends</h2>
            <div className={classes.friends}>
                { friends }
            </div>
        </div>
    )
}

export default Friends;