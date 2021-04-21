import React from 'react';

const Product = ({ nome, preco }) => {
  return (
    <section>
      <h2>{nome}</h2>
      <p>Price: {preco}</p>
    </section>
  );
};

export default Product;
