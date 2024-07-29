import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const res = await axios.get('/api/cart');
      setCartItems(res.data);
    };

    fetchCartItems();
  }, []);

  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.productId}>
          <h4>{item.productName}</h4>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
