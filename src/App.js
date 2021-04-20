import Components from './ExerComponents/Components';
import ExerJXS from './ExerJXS';
import ExerJXSArray from './ExerJXSArray';

const App = () => {
  return (
    <>
      <div>
        <h1>Exercise JXS</h1>
        <ExerJXS />
      </div>

      <div style={{ marginTop: '50px' }}>
        <h1>Exercise JXS Array</h1>
        <ExerJXSArray />
      </div>

      <div style={{ marginTop: '50px' }}>
        <h1>Exercise Components</h1>
        <Components />
      </div>
    </>
  );
};

export default App;
