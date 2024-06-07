import axios from "axios";
import { API } from "../../../axios";
 
 const api_url = API;

export const axiosIntance = axios.create({
    baseURL: api_url,
    headers: {
        "content-Type" : "multipart/form-data"
    }
});


export const getAllCat = () => axiosIntance.get("/cat/getAll");
export const postCat = ({category, imgcat }) => axiosIntance.post("/cat/post",{category, imgcat });
export const deleteCat = (catId) => axiosIntance.delete("/cat/delete/" + catId);