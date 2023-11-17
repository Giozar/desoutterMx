import axios from 'axios'

import {desoutterAPI} from "../config/config.js"
// console.log(backendPort);
const instance = axios.create({
    baseURL: desoutterAPI || "https://7yc636gsjj.execute-api.us-east-1.amazonaws.com/prod",
    withCredentials: true
})

export default instance