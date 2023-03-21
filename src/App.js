import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './components/home';
import { getRestaurantData } from './Redux/getData';

function App() {
  const restaurantData = useSelector(
    (state) => state.restaurant.restaurantList
  );
  console.log(restaurantData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurantData());
  }, []);
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
