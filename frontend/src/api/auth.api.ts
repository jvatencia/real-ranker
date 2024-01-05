import axios from "axios";
import { BASE_URL, DEFAULT_HEADERS } from "../utils/constants";

interface Credentials {
    email: string;
    password: string;
}

export const authenticate = (credentials: Credentials) => {
    return new Promise((resolve, reject) => {
        axios.post(`${BASE_URL}/token`, credentials, { headers: DEFAULT_HEADERS }).then((response) => {
            resolve(response.data);
        }).catch((error) => reject(error));
    })
}