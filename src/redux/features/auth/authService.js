import axios from "axios";
import { API } from "../../../axios";

const api_url = API;

export const axiosInstance = axios.create({
    baseURL : api_url
});

export const signIn = (formValue) => axiosInstance.post("/login", formValue);
export const signUp = (formValue) => axiosInstance.post("/register", formValue);
