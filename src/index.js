import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import AuthProvider from './context/auth-context';

import './assets/stylesheets/index.css';

// prettier-ignore
ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>,
    document.getElementById('root')
);
