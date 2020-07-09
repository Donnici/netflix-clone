import axios from 'axios';
import { API_KEY, BASE_URL, LANG } from '~/config/consts';

export const request = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: 'application/json'
    },
    timeout: 3000
});