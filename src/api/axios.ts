import axios from 'axios';
import envs from '../config/environments';

const instance = axios.create({ baseURL: envs.baseApiUrl, headers: { Accept: 'application/json'}, params: {apikey: envs.apiKey}});

export default instance;