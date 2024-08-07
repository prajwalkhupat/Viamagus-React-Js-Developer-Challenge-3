// ProductList.js

import React, { useState } from 'react';
import './ProductList.css';

const ProductList = ({ productList }) => {
  const [cart, setCart] = useState(productList);
  const [discount, setDiscount] = useState(0);

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateDiscountedTotal = () => {
    const totalPrice = calculateTotalPrice();
    const discountAmount = (totalPrice * discount) / 100;
    return totalPrice - discountAmount;
  };

  const handleDiscountChange = (e) => {
    const enteredDiscount = parseFloat(e.target.value);
    if (!isNaN(enteredDiscount) && enteredDiscount >= 0 && enteredDiscount <= 100) {
      setDiscount(enteredDiscount);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h2 className="mt-4 mb-4">Shopping Cart</h2>
          <div className="row">
            {cart.map(item => (
              <div key={item.id} className="col-md-6">
                <div className="product-card">
                  <img src={`https://via.placeholder.com/150?text=${item.name}`} alt={item.name} className="img-fluid" />
                  <div className="product-details">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <p className="product-price">
                      Price: {new Intl.NumberFormat('en-IN', {
                        style: 'currency',
                        currency: 'INR',
                      }).format(item.price)}
                    </p>
                    <div className="product-quantity">
                      <label htmlFor={`quantityInput${item.id}`}>Quantity:</label>
                      <input
                        type="number"
                        id={`quantityInput${item.id}`}
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                        min="0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <div className="discount-section">
            <label htmlFor="discountInput">Discount Percentage:</label>
            <input
              type="number"
              id="discountInput"
              value={discount}
              onChange={handleDiscountChange}
              min="0"
              max="100"
            />
            <p className="total-price">
              Total Price: {new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
              }).format(calculateTotalPrice())}
            </p>
            <p className="discounted-price">
              Discounted Price: {new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
              }).format(calculateDiscountedTotal())}
            </p>
            <button className="btn btn-success apply-discount-button" onClick={() => alert('Discount applied!')}>
              Apply Discount
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
