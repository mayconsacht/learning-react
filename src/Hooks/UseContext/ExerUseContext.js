import React from 'react';
import Product from './Product';
import { GlobalStorage } from './GlobalStorage';

const ExerUseContext = () => {
  return (
    <GlobalStorage>
      <Product />
    </GlobalStorage>
  );
};

export default ExerUseContext;
