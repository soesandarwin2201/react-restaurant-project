import { configureStore } from "@reduxjs/toolkit";
import RestaurantListReducer from './getData'

const store = configureStore({ 
 reducer: {
  resturants: RestaurantListReducer,
 },
});

export default store;