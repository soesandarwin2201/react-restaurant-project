/* eslint-disable */
import React, { Component } from 'react';
import { ImLeaf } from 'react-icons/im';
import { SlUser } from 'react-icons/sl';

const Header = () => (
  <header className='header-container'>
    <ul className='small-navbar'>
      <li>
        <a href='#' className='register-shop-link'>
          REGISTER MY RESTAURANT
        </a>
      </li>
      <li>
        <a href='#'>HELP</a>
      </li>
    </ul>
    <div className='main-navbar'>
      <div className='logo'>
        <ImLeaf className='logo-icon' />
        <a href='#' className='logo-name'>
          the
          <span>fork</span>
          <p className='span-logo'> a Tripadvisor company</p>
        </a>
      </div>
      <ul className='nav-menu'>
        <li className='nav-item'>
          <button className='btn mylist-btn'>
            <a href='#' className='nav-link'>
              My List
            </a>
          </button>
        </li>
        <li className='nav-item'>
          <button className='login-btn btn'>
            <a href='#' className='nav-link'>
              <SlUser className='btn-icon' /> LOG IN
            </a>
          </button>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
