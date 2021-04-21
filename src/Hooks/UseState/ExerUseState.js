import React from 'react';
import Product from './Product';

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const ExerUseState = () => {
  const [productData, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  async function fetchProduct(event) {
    setLoading(true);
    const productText = event.target.innerText.toLowerCase();
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${productText}`,
    );
    setProduct(await response.json());
    setLoading(false);
  }

  return (
    <div>
      <button style={{ marginRight: '1rem' }} onClick={fetchProduct}>
        Tablet
      </button>
      <button style={{ marginRight: '1rem' }} onClick={fetchProduct}>
        Smartphone
      </button>
      <button style={{ marginRight: '1rem' }} onClick={fetchProduct}>
        Notebook
      </button>
      {!loading && productData && <Product {...productData} />}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default ExerUseState;
