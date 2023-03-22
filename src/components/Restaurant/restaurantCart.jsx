import React, { Component } from 'react';

const RestaurantCart = (props) => {
 const restaurant = props;
 return (
   <div className='cart-container'>
     <img
       src={restaurant.mainPhotoSrc}
       alt='restaurant images'
       className='img-container'
     />
     <div className='cart-info'>
       <p className='food-type'>
         {restaurant.servesCuisine}
         <span className='food-country'>.{restaurant.address.country}</span>
       </p>
       <div className='food-title'>
         <p className='food-name'>{restaurant.name}</p>
         <p className='food-rating'>
           {restaurant.aggregateRatings.thefork.ratingValue}
         </p>
       </div>
       <p className='average-price'>{restaurant.bestOffer.name}</p>
       <div className='btn-container'>
         <button className='btn login-btn'>See Details</button>
       </div>
     </div>
   </div>
 );
}
 
export default RestaurantCart;