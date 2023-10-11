import './styles/App.css';
import CssModuleComponents from './CssModuleComponents';
import SassComponent from './SassComponent';

function App() {
  return (
    <div className="App">
      <h1>React Styling</h1>
      <h2>CSS Module</h2>
      <CssModuleComponents />

      <h2>SASS</h2>
      <SassComponent />
    </div>
  );
}

export default App;
