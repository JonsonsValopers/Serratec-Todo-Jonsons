import axios from 'axios';

const api = axios.create({
<<<<<<< HEAD
    baseURL: 'http://localhost:3333'
    // baseURL: 'http://192.168.1.4:3333'//IP da maquina de quem vai s=usar assim
    // baseURL: 'http://386e89ed9e36.ngrok.io'//ngrok (Guilherme)
    // baseURL: 'https://192.168.0.80:3333'
=======
    // baseURL: 'http://localhost:3333'
    // baseURL: 'http://192.168.1.4:3333'//IP da maquina de quem vai usar assim
    baseURL: 'http://cb6ec3158c43.ngrok.io'//ngrok (Guilherme)
>>>>>>> 641adbb97ef4eb6a07e2921e0d933784dc89e4f4
});

export default api;

// json-server --watch db.json --host 192.168.0.80 --port 3333 (do paulo nao meche kkk)