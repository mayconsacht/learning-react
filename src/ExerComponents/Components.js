import React from 'react';
import Home from './Home';
import Header from './Header';
import Products from './Products';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

const Components = () => {
  const { pathname } = window.location;
  const isHome = pathname === '/' ? true : false;
  return (
    <div>
      <Header />
      {isHome ? <Home /> : <Products />}
    </div>
  );
};

export default Components;
