import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RestaurantCart from './restaurantCart';
import { getRestaurantData } from '../../Redux/getData';

const Restaurants = () => {
  const restaurantData = useSelector(
    (state) => state.restaurant.restaurantList
  );
  console.log(restaurantData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurantData());
  }, []);

  return (
    <section className='restaurant-section'>
      <h1 className='title'> Popular Restaurants For You</h1>
      <div className='restaurant-container'>
        {restaurantData.map((restaurant) => (
          <RestaurantCart key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </section>
  );
};

export default Restaurants;
