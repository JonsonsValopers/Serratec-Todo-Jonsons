import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://10.0.2.2:3333'
    // baseURL: 'http://192.168.1.4:3333'//IP da maquina de quem vai s=usar assim
    baseURL: ''//ngrok (Guilherme)
});

export default api;