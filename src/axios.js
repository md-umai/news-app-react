import axios from "axios";

const api = axios.create({
    baseURL:'https://gnews.io/api/v4',
    timeout: 5000,
})

export default api;
