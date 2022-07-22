import axios from "axios";

const url = "http://127.0.0.1:8000";	// aqui será a URL do servidor Laravel

export const ServiçoAPI = axios.create({
    baseURL: url,
    headers: {
        "content-type": "application/json",
    },
});
