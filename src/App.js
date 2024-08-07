import React from 'react';
import ProductList from './ProductList/ProductList';

const productList = [
  {
    id: 1,
    name: 'Product A',
    price: 50,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Product B',
    price: 30,
    quantity: 1,
  },
  {
    id: 3,
    name: 'Product C',
    price: 25,
    quantity: 1,
  },
  {
    id: 4,
    name: 'Product D',
    price: 40,
    quantity: 1,
  },
  {
    id: 5,
    name: 'Product E',
    price: 60,
    quantity: 1,
  },
  {
    id: 6,
    name: 'Product F',
    price: 35,
    quantity: 1,
  },
  {
    id: 7,
    name: 'Product G',
    price: 55,
    quantity: 1,
  },
  {
    id: 8,
    name: 'Product H',
    price: 45,
    quantity: 1,
  },
  {
    id: 9,
    name: 'Product I',
    price: 70,
    quantity: 1,
  },
  {
    id: 10,
    name: 'Product J',
    price: 80,
    quantity: 1,
  },
  // Add more products as needed
];

const App = () => {
  return (
    <div>
      <ProductList productList={productList} />
    </div>
  );
};

export default App;
