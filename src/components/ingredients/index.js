import React, { useState, useEffect, useReducer } from 'react';
import axios from '../../api/firebase';

import IngredientsForm from './IngredientsForm';
import IngredientList from './IngredientsList';
import Search from './Search';
import ErrorModal from '../ui/ErrorModal';
import classes from '../../assets/stylesheets/ingredients.module.css';

const ingredientReducer = (currentIngredients, action) => {
    switch (action.type) {
        case 'SET':
            return action.ingredients;
        case 'ADD':
            return [...currentIngredients, action.ingredient];
        case 'DELETE':
            return currentIngredients.filter(ing => ing.id !== action.id);
        default:
            throw new Error('Should not get there!');
    }
};

const Ingredients = props => {
    const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
    // const [userIngredients, setUserIngredients] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get('/ingredients.json')
            .then(res => {
                const ingredients = Object.keys(res.data).map(id => {
                    const { title, amount } = res.data[id];
                    return { id, title, amount };
                });
                dispatch({ type: 'SET', ingredients });
            })
            .catch(err => {
                setError(err);
            });
    }, []);

    const addIngredientHandler = newIng => {
        setIsLoading(true);
        axios
            .post('/ingredients.json', newIng)
            .then(res => {
                setIsLoading(false);
                dispatch({
                    type: 'ADD',
                    ingredient: {
                        id: res.data.name,
                        ...newIng,
                    },
                });
            })
            .catch(err => {
                setError(err);
            });
    };

    const removeIngredientHandler = id => {
        setIsLoading(true);
        axios
            .delete(`/ingredients/${id}.json`)
            .then(res => {
                dispatch({ type: 'DELETE', id });
                setIsLoading(false);
            })
            .catch(err => {
                setError(err);
            });
    };

    const filterIngredientsHandler = ingredients => {
        dispatch({ type: 'SET', ingredients });
    };

    const clearError = () => {
        setError(null);
        setIsLoading(false);
    };

    return (
        <div className={classes.Ingredients}>
            <IngredientsForm
                onAddIngredient={addIngredientHandler}
                loading={isLoading}
            />
            <Search onLoadIngredients={filterIngredientsHandler} />
            <IngredientList
                ingredients={userIngredients}
                onRemoveItem={removeIngredientHandler}
            />
            {error ? (
                <ErrorModal onClose={clearError}>{error.message}</ErrorModal>
            ) : null}
        </div>
    );
};

export default Ingredients;
