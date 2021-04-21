import Components from './Basic/ExerComponents/Components';
import ExerJXS from './Basic/ExerJXS';
import ExerJXSArray from './Basic/ExerJXSArray';
import ExerUseEffect from './Hooks/UseEffect/ExerUseEffect';
import ExerUseState from './Hooks/UseState/ExerUseState';

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

      <div style={{ marginTop: '50px' }}>
        <h1>Exercise useState</h1>
        <ExerUseState />
      </div>

      <div style={{ marginTop: '50px' }}>
        <h1>Exercise useEffect</h1>
        <ExerUseEffect />
      </div>
    </>
  );
};

export default App;
