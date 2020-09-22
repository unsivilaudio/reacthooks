import React, { useState } from 'react';

import Spinner from '../ui/Spinner';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Input from '../ui/Input';

const IngredientsForm = props => {
    const [inputState, setInputState] = useState({ title: '', amount: '' });

    const handleChange = e => {
        setInputState({ ...inputState, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.onAddIngredient({
            title: inputState.title,
            amount: inputState.amount,
        });
        setInputState({ title: '', amount: '' });
    };

    return (
        <Card header='Add An Ingredient'>
            <form onSubmit={handleSubmit}>
                <Input
                    inputType='text'
                    name='title'
                    label='name'
                    value={inputState.title}
                    change={handleChange}
                />
                <Input
                    inputType='number'
                    name='amount'
                    label='amount'
                    value={inputState.amount}
                    change={handleChange}
                />
                <Button
                    btnType='submit'
                    label={props.loading ? <Spinner /> : 'Add Ingredient'}
                    loading={props.loading}
                />
            </form>
        </Card>
    );
};

export default IngredientsForm;
