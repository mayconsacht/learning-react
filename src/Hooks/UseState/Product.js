import React from 'react';

const Product = ({ fotos, nome, preco, descricao, vendido }) => {
  return (
    <section>
      <h2>{nome}</h2>
      {fotos.map((foto) => (
        <div>
          <img key={foto.titulo} src={foto.src} alt={foto.titulo}></img>
        </div>
      ))}
      <p>Description: {descricao}</p>
      <p>Price: {preco}</p>
      <p>Sold: {vendido}</p>
    </section>
  );
};

export default Product;
