import axios from 'axios';

const http = axios.create({

    baseURL:"http://186.211.97.245:8082"
});

export default http;