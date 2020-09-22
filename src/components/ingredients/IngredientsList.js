import React from 'react';

import classes from '../../assets/stylesheets/ingredientslist.module.css';

const IngredientList = props => {
    return (
        <div className={classes.IngredientList}>
            <h1 className={classes.Header}>Loaded Ingredients</h1>
            <ul>
                {props.ingredients.map(el => {
                    return (
                        <li
                            key={el.id}
                            onClick={() =>
                                props.onRemoveItem.bind(this, el.id)
                            }>
                            <div className={classes.Title}>{el.title}</div>
                            <div className={classes.Amount}>{el.amount}x</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default IngredientList;
