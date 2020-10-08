import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:3333'
    // baseURL: 'http://192.168.1.4:3333'//IP da maquina de quem vai usar assim
    baseURL: 'http://7d7a81bc4c92.ngrok.io'//ngrok (Guilherme)
    // baseURL:'http://192.168.0.80:3333' //Versao do paulo
});

export default api;

// json-server --watch db.json --host 192.168.0.80 --port 3333 (do paulo nao meche kkk)