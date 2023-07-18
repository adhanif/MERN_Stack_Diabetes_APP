import axios from 'axios';

const axiosClient = axios.create({ baseURL: import.meta.env.VITE_BE_URL });
// console.log(import.meta.env.VITE_BE_URL);

export default axiosClient;
