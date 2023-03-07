import React, { Component } from 'react';

const Footer = () => {
 return (
   <footer className='footer-container'>
     <div className='details'>
       <div className='download'>
         <h5 className='download-title'>Download our App</h5>
         <button className='app-store btn'>App Store</button>
         <button className='app-store btn'>Goggle play</button>
       </div>
       <ul className='about'>
         <li className='footer-item'>
           <a href='' className='footer-link'>
             About
           </a>
         </li>
         <li className='footer-item'>
           <a href='' className='footer-link'>
             Contact
           </a>
         </li>
         <li className='footer-item'>
           <a href='' className='footer-link'>
             About
           </a>
         </li>
         <li className='footer-item'>
           <a href='' className='footer-link'>
             Are you a restaurant
           </a>
         </li>
         <li className='footer-item'>
           <a href='' className='footer-link'>
             Frequently asked questions
           </a>
         </li>
         <li className='footer-item'>
           <a href='' className='footer-link'>
             We are hiring
           </a>
         </li>
       </ul>
       <div className='program'>
         <li className='footer-item'>
           <a href='' className='footer-link'>
             loyalty program
           </a>
         </li>
         <li className='footer-item'>
           <a href='' className='footer-link'>
             Terms of use
           </a>
         </li>
         <li className='footer-item'>
           <a href='' className='footer-link'>
             Privacy and cookies
           </a>
         </li>
       </div>
       <p className='copyright'>
         © 2023 LA FOURCHETTESAS - ALL RIGHTS RESERVED
       </p>
     </div>
       <p className='footer-text'>
         Promotional offers are subject to conditions displayed on the
         restaurant’s page. Offers on alcoholic beverages are strictly reserved
         for adults. Alcohol abuse is dangerous for your health. Drink with
         moderation.
       </p>
   </footer>
 );
}
 
export default Footer;