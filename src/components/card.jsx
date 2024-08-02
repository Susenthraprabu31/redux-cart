// src/components/card.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from './productsSlice';

const card = ({ product }) => {
    // initalizing dispatch
  const dispatch = useDispatch();
    // calling quantity change function to update value.
  const quantityChange = (event) => {
    const newQuantity = event.target.value;
    dispatch(updateProduct({ productId: product.id, newQuantity, productPrice: product.price }));
  };

  return (
    <>
      <div className="container mt-5">
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={product.image} className="card-img" alt="Product Image" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <div className="card-text">
                  <h6>Details & Care</h6>
                  <p>{product.description}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="quantity">
                    <label htmlFor="quantity-title">Quantity:</label>
                    <input
                      type="number"
                      id="quantity-title"
                      className="form-control quantity-value"
                      value={product.quantity}
                      min="1"
                      onChange={quantityChange}
                    />
                  </div>
                  <div className="price">
                    <h5>Price: ${product.price}</h5>
                  </div>
                  <div className="remove">
                    <a href="#" className="text-danger">REMOVE</a>
                  </div>
                </div>
                <div className="Rating">
                  <h6 className="card-text">Rating: {product.rating.rate}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="summary">
          <div className="d-flex justify-content-between">
            <p>SUBTOTAL:</p>
            <p>${product.total}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>SHIPPING:</p>
            <p>FREE</p>
          </div>
          <div className="d-flex justify-content-between">
            <h5>TOTAL:</h5>
            <h5>${product.total}</h5>
          </div>
        </div>
        <p className="text-right text-muted">Get Daily Cash With Nespola Card</p>
      </div>
      <hr />
    </>
  );
};

export default card;