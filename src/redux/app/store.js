import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import brandSlice from "../features/brand/brandSlice";
import catSlice from "../features/cat/catSlice";
import postSlice from "../features/post/postSlice";
import navbarSlice from "../features/navbar/navbarSlice";

export const store = configureStore({
    reducer: {
        auth : authSlice,
        brand : brandSlice,
        cat : catSlice,
        product : postSlice,
        nav : navbarSlice
    }
})
