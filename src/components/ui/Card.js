import React from 'react';

import classes from '../../assets/stylesheets/card.module.css';

const card = props => {
    return <div className={classes.Card}>{props.children}</div>;
};

export default card;
