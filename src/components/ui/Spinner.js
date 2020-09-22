import React from 'react';

import svgLoader from '../../assets/svg-loaders/spinning-circles.svg';

import classes from '../../assets/stylesheets/spinner.module.css';

const spinner = props => {
    return (
        <div className={classes.Spinner}>
            <img src={svgLoader} alt='Loading...' className={classes.Svg} />
        </div>
    );
};

export default spinner;
