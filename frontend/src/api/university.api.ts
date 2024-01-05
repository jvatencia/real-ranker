import axios from "axios";
import { BASE_URL, DEFAULT_HEADERS } from "../utils/constants";

export const getUniversities = (params?: any) => {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/data`, { headers: DEFAULT_HEADERS }).then((response) => {
            resolve(response.data);
        }).catch((error) => reject(error));
    })
}