import React from 'react';

import classes from '../../assets/stylesheets/button.module.css';

const button = props => {
    return (
        <button type={props.btnType} className={classes.Button}>
            {props.label}
        </button>
    );
};

export default button;
