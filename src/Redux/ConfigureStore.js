import { configureStore } from "@reduxjs/toolkit";
import RestaurantListReducer from './getData'

const store = configureStore({ 
 reducer: {
  restaurant: RestaurantListReducer,
 },
});

export default store;