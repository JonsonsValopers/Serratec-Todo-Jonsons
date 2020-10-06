import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.2.2:3333'
    // baseURL: 'http://192.168.1.4:3333'//IP da maquina de quem vai s=usar assim
<<<<<<< HEAD:src/services/api.js
    // baseURL: ''//ngrok (Guilherme)
=======
    baseURL: 'http://386e89ed9e36.ngrok.io'//ngrok (Guilherme)
>>>>>>> 8c86cf08b424ba00f673b502c8972bd8f8bcb29e:src/service/api.js
});

export default api;