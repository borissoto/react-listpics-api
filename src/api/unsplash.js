import axios from 'axios';

const API_ID = process.env.REACT_APP_UNSPLASH_API_ID;

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: '',
  },
});
