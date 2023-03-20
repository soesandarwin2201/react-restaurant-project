import React, { Component } from 'react';

const Restaurant = (props) => {
  return ( 
    <div className="restaurant-container">
      <div className="img-container">
      </div>
      <div className="resturant-info">
        <span className="location">Japan .WITH FRINEDS</span>
        <div className="restaurant-name">
          <h3 className="name">Hullu</h3>
          <h4 className="rating">9.9</h4>
        </div>
        <button className="pay">pay</button>
        <p className="address">myanmr,mandalay</p>
        <p className="price">$40 average price</p>
      </div>
    </div>);
}
 
export default Restaurant;
