import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './components/home';
import Restaurants from './components/Restaurant/Restaurants';

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Restaurants />
      <Footer />
    </>
  );
}

export default App;
