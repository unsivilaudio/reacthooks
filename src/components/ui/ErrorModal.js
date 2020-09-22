import React from 'react';

import classes from '../../assets/stylesheets/errormodal.module.css';

const errorModal = props => {
    return (
        <div className={classes.Modal} onClick={props.onClose}>
            <div className={classes.Content}>
                <p>{props.children}</p>
                <button onClick={props.onClose}>Go back</button>
            </div>
        </div>
    );
};

export default errorModal;
