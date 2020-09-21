import React, { useState } from 'react';

import Card from '../ui/Card';
import Input from '../ui/Input';
import IngredientsForm from './IngredientsForm';
import IngredientList from './IngredientsList';
import classes from '../../assets/stylesheets/ingredients.module.css';

const Ingredients = props => {
    const [userIngredients, setUserIngredients] = useState([]);
    const [inputState, setInputState] = useState({
        ingFilter: '',
    });

    const addIngredientHandler = ingredient => {
        setUserIngredients(prevIngredients => [
            ...prevIngredients,
            {
                id: Math.random().toString(),
                ...ingredient,
            },
        ]);
    };

    const handleChange = e => {
        setInputState({ ...inputState, [e.target.name]: e.target.value });
    };

    return (
        <div className={classes.Ingredients}>
            <IngredientsForm
                onAddIngredient={addIngredientHandler}
                onRemoveItem={() => {}}
            />
            <Card>
                <div className={classes.Filter}>
                    <h3>Filter By Title</h3>
                    <Input
                        inputType='text'
                        name='ingFilter'
                        label='none'
                        change={handleChange}
                        value={inputState.ingFilter}
                    />
                </div>
            </Card>
            <IngredientList ingredients={userIngredients} />
        </div>
    );
};

export default Ingredients;
