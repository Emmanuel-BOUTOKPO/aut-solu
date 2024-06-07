import { createSlice } from '@reduxjs/toolkit';
import { toast } from "react-toastify";

function fetchFromLocalStorage() {
    let value = localStorage.getItem("value");
    if (value) {
        return JSON.parse(value);
    }
    else {
        return []; // empty array
    }
}

const initialState = {
    value: fetchFromLocalStorage(),
}

export const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        add: (state, action) => {
            const IteamIndex = state.value.findIndex(eachProduct => eachProduct.idproduct === action.payload.idproduct);

            if (IteamIndex >= 0) {
                state.value[IteamIndex].quantity += 1
            } else {
                const temp = { ...action.payload, quantity: 1 }
                state.value = [...state.value, temp]
            }
            localStorage.setItem("value", JSON.stringify(state.value));
            toast.success("Product is add!");
        },

        remove: (state, action) => {
            const index = state.value.findIndex(product => product.id === action.payload);
            if (index !== -1) {
                state.value.splice(index, 1); // Sepetten bu indeksi kullanarak 1 öğeyi çıkarır.

                localStorage.setItem("value", JSON.stringify(state.value));
                toast.success("Product is removed!");
            }
        },
        removeAll: (state) => {
            state.value = [];  
            localStorage.removeItem("value"); 
            toast.success("Cart is cleared!"); 
        },

        removeOne: (state, action) => {
            const IteamIndex_dec = state.value.findIndex((iteam) => iteam.idproduct === action.payload);
            if (IteamIndex_dec !== -1) {
            if(state.value[IteamIndex_dec].quantity >1){
                state.value[IteamIndex_dec].quantity -= 1
                localStorage.setItem("value", JSON.stringify(state.value));
                toast.success("Product is removed!");
            }
        }  
        }
    },
});

export const { add, remove, removeOne, removeAll} = navbarSlice.actions;

export default navbarSlice.reducer;
