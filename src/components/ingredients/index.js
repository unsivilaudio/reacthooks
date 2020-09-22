import React, { useState, useEffect } from 'react';
import axios from '../../api/firebase';

import IngredientsForm from './IngredientsForm';
import IngredientList from './IngredientsList';
import Search from './Search';
import ErrorModal from '../ui/ErrorModal';
import classes from '../../assets/stylesheets/ingredients.module.css';

const Ingredients = props => {
    const [userIngredients, setUserIngredients] = useState([]);
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
                setUserIngredients(ingredients);
            })
            .catch(err => {
                setError(err);
            });
    }, []);

    const addIngredientHandler = ingredient => {
        setIsLoading(true);
        axios
            .post('/ingredients.json', ingredient)
            .then(res => {
                setIsLoading(false);
                setUserIngredients(prevIngredients => [
                    ...prevIngredients,
                    {
                        id: res.data.name,
                        ...ingredient,
                    },
                ]);
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
                setUserIngredients(prevIngredients => {
                    return prevIngredients.filter(ing => ing.id !== id);
                });
                setIsLoading(false);
            })
            .catch(err => {
                setError(err);
            });
    };

    const filterIngredientsHandler = ingredients => {
        setUserIngredients(ingredients);
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
