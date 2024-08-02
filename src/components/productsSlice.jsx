import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [] // Initialize with an empty array or your default products
};

// Creating redux for products
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // setup products from initial data
    setProducts(state, action) {
      state.products = action.payload;
    },
    // updating product quantity and totalamount
    updateProduct(state, action) {
      const { productId, newQuantity, productPrice } = action.payload;
      state.products = state.products.map(product => {
        if (product.id === productId) {
          const totalAmount = (newQuantity * productPrice).toFixed(2);
          return { ...product, quantity: newQuantity, total: totalAmount };
        }
        return product;
      });
    },
  },
});

export const { setProducts, updateProduct } = productsSlice.actions;

export default productsSlice.reducer;