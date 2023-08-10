import axios from "axios"

export const api = axios.create({
    // Endereço da API
    baseURL: "http://localhost:3333"
})