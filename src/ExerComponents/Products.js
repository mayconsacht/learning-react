import React from 'react';
import Title from './Title';

const ProductItem = ({ name, properties }) => {
  return (
    <div style={{ border: '1px solid', margin: '1rem 0', padding: '1rem' }}>
      <p>{name}</p>
      <ul>
        {properties.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

const Products = () => {
  const products = [
    { name: 'Notebook', properties: ['16gb ram', '512gb'] },
    { name: 'Smartphone', properties: ['2gb ram', '128gb'] },
  ];

  return (
    <>
      <Title text="Products" />
      {products.map((product) => (
        <ProductItem key={product.name} {...product} />
      ))}
    </>
  );
};

export default Products;
