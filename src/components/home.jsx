import React from 'react';

const HomePage = () => {
  return (
    <section className='homepage'>
      <div className='homepage-left'>
        <h1 className='home-title'>Discover and book the best restaurant</h1>
        <form action='' className='seachform'>
          <div className='form-item'>
            <label htmlFor='restuarant'>what</label>
            <input
              type='text'
              className='form-control'
              placeholder='🍴 Cuisine restaurant name...'
            />
          </div>
          <div className='form-item'>
            <label htmlFor='location'>where</label>
            <input
              type='text'
              className='form-control'
              placeholder='🛸 search for the location'
            />
          </div>
          <div className='form-item'>
            <button type='search' className='search-btn btn'>search</button>
          </div>
        </form>
      </div>
      <div className='homepage-right'></div>
    </section>
  );
};

export default HomePage;
