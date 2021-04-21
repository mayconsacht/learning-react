import React from 'react';
import Product from './Product';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const ExerUseEffect = () => {
  const [productData, setProduct] = React.useState(null);

  React.useEffect(() => {
    const current = localStorage.getItem('currentProduct');
    if (current) fetchProduct(current);
  }, []);

  async function fetchProduct(productText) {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${productText}`,
    );
    setProduct(await response.json());
    localStorage.setItem('currentProduct', productText);
  }

  return (
    <div>
      <button
        style={{ marginRight: '1rem' }}
        onClick={() => fetchProduct('smartphone')}
      >
        Smartphone
      </button>
      <button
        style={{ marginRight: '1rem' }}
        onClick={() => fetchProduct('notebook')}
      >
        Notebook
      </button>
      {productData && <Product {...productData} />}
    </div>
  );
};

export default ExerUseEffect;
