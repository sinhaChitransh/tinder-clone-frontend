import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-backend-training.herokuapp.com/'
});

export default instance;