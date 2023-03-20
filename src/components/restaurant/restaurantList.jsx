import React, { Component, useState } from 'react';
import Restaurant from './restaurant';

const RestaurantList = () => {
 const [state,setState] = useState([
  {
  id : 1,
  location : 'pizza',
  rating : 8,
  name : 'pizza hub',
  address : 'myanmar mandalay',
  price : '$40 average pirce'
 },
  {
  id : 2,
  location : 'hotpot',
  rating : 9,
  name : 'hotpot panda',
  address : 'myanmar mandalay',
  price : '$30 average pirce'
 },
  {
  id : 3,
  location : 'marlar shan kaw',
  rating : 8,
  name : 'spicy pot',
  address : 'myanmar mandalay',
  price : '$80 average pirce'
 },
  {
  id : 1,
  location : 'ormuk',
  rating : 8,
  name : 'ormuk',
  address : 'myanmar mandalay',
  price : '$40 average pirce'
 },
]);
 return ( 
  <section className="list-container">
   {  state.map(list => {
    <Restaurant   />
   })}
    
  </section>
  );
}
 
export default RestaurantList;