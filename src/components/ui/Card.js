import React from 'react';

import classes from '../../assets/stylesheets/card.module.css';

const card = props => {
    return (
        <div className={classes.Card}>
            {props.header ? (
                <div className={classes.Header}>{props.header}</div>
            ) : null}
            <div className={classes.Content}>{props.children}</div>
        </div>
    );
};

export default card;
