import axios from "axios";


axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['X-ACCESS-ID'] = process.env.authAPIKey;