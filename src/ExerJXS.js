// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const ExerJXS = () => {
  const data = mario;

  const total = data.compras
    .map((compras) => Number(compras.preco.replace('R$ ', '')))
    .reduce((prev, curr) => prev + curr);

  return (
    <>
      <p>Name: {data.cliente}</p>
      <p>Age: {data.idade}</p>
      <p>
        Situation:{' '}
        <span style={{ color: data.ativa ? 'green' : 'red' }}>
          {data.ativa ? 'Active' : 'Inactive'}
        </span>
      </p>
      <p>Total spent: {total}</p>
      {total > 10000 && <p>You are spending too much.</p>}
    </>
  );
};

export default ExerJXS;
