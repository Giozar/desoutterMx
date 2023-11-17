import axios from "./axios.js";

export const contactRequest = async (data) => await axios.post("/contacto", data, {withCredentials: true});
export const quoteRequest = async (url, data) => await axios.post(url, data, {withCredentials: true});