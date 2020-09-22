import React, { useState, useEffect } from 'react';
import axios from '../../api/firebase';

import IngredientsForm from './IngredientsForm';
import IngredientList from './IngredientsList';
import Search from './Search';
import classes from '../../assets/stylesheets/ingredients.module.css';

const Ingredients = props => {
    const [userIngredients, setUserIngredients] = useState([]);

    useEffect(() => {
        axios
            .get('/ingredients.json')
            .then(res => {
                const ingredients = Object.keys(res.data).map(id => {
                    const { title, amount } = res.data[id];
                    return { id, title, amount };
                });
                setUserIngredients(ingredients);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, []);

    const addIngredientHandler = ingredient => {
        axios
            .post('/ingredients.json', ingredient)
            .then(res => {
                setUserIngredients(prevIngredients => [
                    ...prevIngredients,
                    {
                        id: res.data.name,
                        ...ingredient,
                    },
                ]);
            })
            .catch(err => {
                console.log(err.message);
            });
    };

    const filterIngredientsHandler = ingredients => {
        setUserIngredients(ingredients);
    };

    return (
        <div className={classes.Ingredients}>
            <IngredientsForm
                onAddIngredient={addIngredientHandler}
                onRemoveItem={() => {}}
            />
            <Search onLoadIngredients={filterIngredientsHandler} />
            <IngredientList ingredients={userIngredients} />
        </div>
    );
};

export default Ingredients;
