import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosIntance, deleteBrand, getAllBrand, postBrand } from './brandService';
 
const initialState={
  brand :[],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const getBrand = createAsyncThunk("brand/getAll", async (_, { rejectWithValue }) => {
  try {
      const response = await getAllBrand();
      return response.data;
     
  } catch (error) {
      return rejectWithValue(error.response.data)
  }
});

export const createBrand = createAsyncThunk("cat/create", async (form, thunkAPI) => {
  try {
       const response = await postBrand(form);
      return response.data; 
  } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
  }
}); 

export const deleteBrands= createAsyncThunk("delete/create", async (brandId, thunkAPI) => {
  try {
       const response = await deleteBrand(brandId);
      return response.data; 
  } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
  }
}); 

export const updateBrand = createAsyncThunk("update/create", async (forms, thunkAPI) => {
  try {
        const {id, brand} = forms
      const response = await axiosIntance.put(`/crew/update/${id}`, {brand});
      return response.data;
  } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
  }
}); 

export const brandSlice = createSlice({
    name: 'brand',
    initialState,
    reducers: {
        reducers: {
            reset: (state) => initialState,
          },
    },
    extraReducers: (builder) => {
      builder
      .addCase(getBrand.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getBrand.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
       state.brand = action.payload
      })
      .addCase(getBrand.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(createBrand.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createBrand.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
       state.brand.push(action.payload)
      })
      .addCase(createBrand.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteBrands.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteBrands.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.brand = state.brand.filter(
          (category) => category.id !== action.payload.id
        )
      })
      .addCase(deleteBrands.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateBrand.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateBrand.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.brand = state.brand.map((category) =>
        category.id === action.payload.id ? action.payload : category
  )
      })
      .addCase(updateBrand.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
    },
  })

  export const { reset } = brandSlice.actions
  export default brandSlice.reducer