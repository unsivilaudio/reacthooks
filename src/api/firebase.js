import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reacthooks-ingredient-list.firebaseio.com',
});

export default instance;
