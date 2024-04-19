import React from 'react';
import Header from './Components/Header';
import Products from './Components/Products';
import Provider from './context/Provider';
import Cart from './Components/Cart';

function App() {

  return (
    <Provider>
      <Header />
      <Products />
      <Cart />
    </Provider>
  );
}

export default App;
