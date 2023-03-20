import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 restaurantList: [],
 isLoading : true
}

const restaurantListSlice = createSlice({
 name : 'restaurant',
 initialState,
});

console.log(restaurantListSlice);

export default restaurantListSlice.reducer;