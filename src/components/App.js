import React from 'react';

import Ingredients from './ingredients';
import Auth from './Auth';
import classes from '../assets/stylesheets/app.module.css';

class App extends React.Component {
    render() {
        return (
            <div className={classes.App}>
                <h1>React Hooks Demo</h1>
                <Auth />
            </div>
        );
    }
}

export default App;
