import axios from "axios"

export const api = axios.create({
    // Endereço da API - localhost
    //baseURL: "http://localhost:3333"
    // Disponível pelo Render
    baseURL: "https://mynotes-xjhu.onrender.com"
})