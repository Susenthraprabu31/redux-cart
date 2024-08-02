// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './components/store';
import CartPage from './components/cartPage';

const App = () => {
  return (
    <Provider store={store}>
      <div className="sticky">
        <h2 className="sticky-top">Shopping Cart</h2>
      </div>
      <div className="container">
        <CartPage />
      </div>
    </Provider>
  );
};

export default App;