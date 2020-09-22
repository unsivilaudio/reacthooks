import React, { useContext } from 'react';

import Ingredients from './ingredients';
import Auth from './Auth';
import { AuthContext } from '../context/auth-context';
import classes from '../assets/stylesheets/app.module.css';

const App = props => {
    const authContext = useContext(AuthContext);

    let content = <Auth />;
    if (authContext.isAuth) {
        content = <Ingredients />;
    }

    return (
        <div className={classes.App}>
            <h1>React Hooks Demo</h1>
            {content}
        </div>
    );
};

export default App;
