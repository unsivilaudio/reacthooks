import React from 'react';

import classes from '../../assets/stylesheets/input.module.css';

const input = props => {
    return (
        <div className={classes.Input}>
            {props.label === 'none' ? null : (
                <label htmlFor={props.name}>{props.label}</label>
            )}
            <input
                id={props.name}
                name={props.name}
                type={props.inputType}
                onChange={props.change}
                value={props.value}
            />
        </div>
    );
};

export default input;
