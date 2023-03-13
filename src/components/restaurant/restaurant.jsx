import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Restaurant = () => {
 const [restaurant,setRestaurant] = useState([]);

 useEffect(() => {
   const options = {
     method: 'GET',
     url: 'https://the-fork-the-spoon.p.rapidapi.com/sale-type-menu/list',
     params: { id_restaurant: '522995', locale: 'en_US' },
     headers: {
       'X-RapidAPI-Key': 'f43e8cbd7bmshddf9d6d049422b2p1f5914jsn874cffe411c9',
       'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com',
     },
   };

   axios
     .request(options)
     .then((response) => {
       console.log(response.data);
     })
     .catch((error) => {
       console.error(error);
     });
 }, []);
 return ( 
  <div>
      <h2>Restaurant List</h2>
      <ul>
        {restaurant.map((restaurant, index) => (
          <li key={index}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
 );
}
 
export default Restaurant;