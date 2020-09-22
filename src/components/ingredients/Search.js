import React, { useState } from 'react';
import axios from '../../api/firebase';

import Input from '../ui/Input';
import Card from '../ui/Card';
import classes from '../../assets/stylesheets/search.module.css';

const Search = props => {
    const onLoadIngredients = props.onLoadIngredients.bind(this);
    const [query, setQuery] = useState('');
    const [timer, setTimer] = useState(null);

    const handleChange = e => {
        clearTimeout(timer);
        const term = e.target.value;
        setQuery(term);
        setTimer(
            setTimeout(() => {
                filterIngredients(term);
            }, 750)
        );
    };

    const filterIngredients = term => {
        const params = term === '' ? '' : `?orderBy="title"&equalTo="${term}"`;
        axios
            .get('/ingredients.json' + params)
            .then(res => {
                const ingredients = Object.keys(res.data).map(id => {
                    const { title, amount } = res.data[id];
                    return { id, title, amount };
                });
                onLoadIngredients(ingredients);
            })
            .catch(err => console.log(err.message));
    };

    return (
        <Card>
            <div className={classes.Search}>
                <h3>Filter By Title</h3>
                <Input
                    inputType='text'
                    name='ingFilter'
                    label='none'
                    change={handleChange}
                    value={query}
                />
            </div>
        </Card>
    );
};

export default Search;
