import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [product, setProduct] = React.useState(null);

  React.useEffect(async () => {
    await fetchProduct();
  }, []);

  async function fetchProduct() {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/`,
    );
    setProduct(await response.json());
  }

  function cleanData() {
    setProduct(null);
  }

  return (
    <GlobalContext.Provider value={{ product, cleanData }}>
      {children}
    </GlobalContext.Provider>
  );
};
