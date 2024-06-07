import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosIntance, deleteCat, getAllCat, postCat } from './catService';
 
const initialState={
  categorie :[],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const getCat = createAsyncThunk("cat/getAll", async (_, { rejectWithValue }) => {
  try {
      const response = await getAllCat();
      return response.data;
     
  } catch (error) {
      return rejectWithValue(error.response.data)
  }
});

export const createCat = createAsyncThunk("cat/create", async ({category, imgcat }, thunkAPI) => {
  try {
       const response = await postCat({category, imgcat });
      return response.data; 
  } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
  }
}); 

export const deleteCatgry = createAsyncThunk("delete/create", async (catId, thunkAPI) => {
  try {
       const response = await deleteCat(catId);
      return response.data; 
  } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
  }
}); 

export const updateCatgry = createAsyncThunk("update/create", async ({ id, category, imgcat }, thunkAPI) => {
  try {
      const response = await axiosIntance.put(`/cat/update/${id}`, { id, category, imgcat });
      return response.data;
  } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
  }
}); 

export const catSlice = createSlice({
    name: 'categorie',
    initialState,
    reducers: {
        reducers: {
            reset: (state) => initialState,
          },
    },
    extraReducers: (builder) => {
      builder
      .addCase(getCat.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCat.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
       state.categorie = action.payload
      })
      .addCase(getCat.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(createCat.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createCat.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
       state.categorie.push(action.payload)
      })
      .addCase(createCat.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteCatgry.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteCatgry.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.categorie = state.categorie.filter(
          (category) => category.id !== action.payload.id
        )
      })
      .addCase(deleteCatgry.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateCatgry.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateCatgry.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.categorie = state.categorie.map((category) =>
        category.id === action.payload.id ? action.payload : category
  )
      })
      .addCase(updateCatgry.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
    },
  })

  export const { reset } = catSlice.actions
  export default catSlice.reducer