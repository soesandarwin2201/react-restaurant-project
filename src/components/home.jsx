/* eslint-disable */
import React from 'react';

const HomePage = () => (
  <section className='homepage'>
    <div className='homepage-left'>
      <h1 className='home-title'>Discover and book the best restaurant</h1>
      <form className='seachform'>
        <div className='form-item'>
          <p className='label'>what</p>
          <input
            type='text'
            className='form-control'
            placeholder='🍴 Cuisine restaurant name...'
          />
        </div>
        <div className='form-item'>
          <p className='label'>where</p>
          <input
            type='text'
            className='form-control'
            placeholder='🛸 search for the location'
          />
        </div>
        <div className='form-item'>
          <button type='text' className='search-btn btn'>
            search
          </button>
        </div>
      </form>
    </div>
    <div className='homepage-right' />
  </section>
);

export default HomePage;
