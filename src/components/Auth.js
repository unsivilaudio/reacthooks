import React, { useState } from 'react';

import Card from './ui/Card';
import Input from './ui/Input';
import Button from './ui/Button';
import classes from '../assets/stylesheets/auth.module.css';

const Auth = props => {
    const [inputState, setInputState] = useState({
        username: '',
        password: '',
    });
    const [authType, setAuthType] = useState('signup');

    const toggleAuthType = () => {
        setAuthType(prevState => {
            return prevState === 'signup' ? 'signin' : 'signup';
        });
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setInputState(prevState => {
            return { ...prevState, [name]: value };
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(inputState);
    };

    return (
        <Card header={authType === 'signup' ? 'Sign Up' : 'Sign In'}>
            <form onSubmit={handleSubmit} className={classes.Auth}>
                <Input
                    name='username'
                    label='username'
                    inputType='text'
                    change={handleChange}
                    value={inputState.username}
                />
                <Input
                    name='password'
                    label='password'
                    inputType='password'
                    change={handleChange}
                    value={inputState.password}
                />
                <div className={classes.BtnActions}>
                    <Button btnType='submit' label='Submit' />
                    <Button
                        btnType='button'
                        label={`Switch to ${
                            authType === 'signup' ? 'Sign In' : 'Sign Up'
                        }`}
                        clicked={toggleAuthType}
                    />
                </div>
            </form>
        </Card>
    );
};

export default Auth;
