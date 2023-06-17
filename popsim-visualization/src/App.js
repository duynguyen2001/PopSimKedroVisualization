import KedroViz from '@quantumblack/kedro-viz';
import json from './popsim_pipeline.json';

function App() {
  return (
    <div style={{ height: '100vh' }}>
    <KedroViz data={json} />
  </div>
  );
}

export default App;
