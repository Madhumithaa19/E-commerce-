import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('/api/products');
      setProducts(res.data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
