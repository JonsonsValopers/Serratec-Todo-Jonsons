import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://10.0.2.2:3333'
    // baseURL: 'http://192.168.1.4:3333'//IP da maquina de quem vai s=usar assim
    baseURL: 'http://386e89ed9e36.ngrok.io'//ngrok (Guilherme)
});

export default api;