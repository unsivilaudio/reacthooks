import React from 'react';

import classes from '../../assets/stylesheets/button.module.css';

const button = props => {
    return (
        <button
            type={props.btnType}
            className={classes.Button}
            disabled={props.loading}
            onClick={props.clicked || null}>
            {props.label}
        </button>
    );
};

export default button;
