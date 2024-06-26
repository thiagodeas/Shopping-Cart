import React, { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

function Provider ({children}) {
  
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(true);

  const value = {
    products, 
    setProducts,
    loading, 
    setLoading,
    cartItems, 
    setCartItems,
    isCartVisible, 
    setIsCartVisible,
  };
  return (
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any.isRequired,
};
