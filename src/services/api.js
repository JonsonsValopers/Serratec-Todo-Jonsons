import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:3333'
    // baseURL: 'http://192.168.1.4:3333'//IP da maquina de quem vai usar assim
    baseURL: 'http://cb6ec3158c43.ngrok.io'//ngrok (Guilherme)
});

export default api;