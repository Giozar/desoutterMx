import axios from "./axios.js";

export const contactRequest = async (data) => await axios.post("/contacto", data, {withCredentials: true});
export const quoteRequest = async (data) => await axios.post("/contacto", data, {withCredentials: true});