import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
 restaurantList: [],
 isLoading : true
}

export const getRestaurantData = createAsyncThunk('restaurant/getRestaurantData',async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f43e8cbd7bmshddf9d6d049422b2p1f5914jsn874cffe411c9',
      'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com',
    },
  };

  const response = await fetch(
    'https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/list?queryPlaceValueCityId=348156&pageSize=10&pageNumber=1',
    options);
    const data = await response.json();
    return data;
});

const restaurantListSlice = createSlice({
  name: 'restaurant',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getRestaurantData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRestaurantData.fulfilled, (state, action) => {
      state.restaurantList = action.payload.data;
      console.log(state.restaurantList);
      state.isLoading = false;
    });
    builder.addCase(getRestaurantData.rejected, (state) => {
      state.isLoading = true;
    });
  },
});

export default restaurantListSlice.reducer;