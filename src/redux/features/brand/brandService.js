import axios from "axios";
import { API } from "../../../axios";
 
 const api_url = API;

export const axiosIntance = axios.create({
    baseURL: api_url
});


export const getAllBrand = () => axiosIntance.get("/crew/getAll");
export const postBrand = (form) => axiosIntance.post("/crew/post",form);
export const deleteBrand = (brandId) => axiosIntance.delete("/crew/delete/" + brandId);