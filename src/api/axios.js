import axios from 'axios'

import {desoutterAPI} from "../config/config.js"
// console.log(backendPort);
const instance = axios.create({
    baseURL: desoutterAPI,
    withCredentials: true
})

export default instance