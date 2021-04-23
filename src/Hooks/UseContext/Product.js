import React from 'react';
import { GlobalContext } from './GlobalStorage';

const Product = () => {
  const global = React.useContext(GlobalContext);

  function handleClick() {
    global.cleanData();
  }

  return (
    <div>
      {global.product && (
        <div>
          Produto:{' '}
          {global.product.map((item) => (
            <li key="item.id">{item.nome}</li>
          ))}
        </div>
      )}
      <button onClick={handleClick}>Clean</button>
    </div>
  );
};

export default Product;
