import './App.css';
import Counter from './Counter';
import SayFunction from './SayFunction';
import CounterFunction from './CounterFunction';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <SayFunction />
      <CounterFunction value={'Plus 1'} />
    </div>
  );
}

export default App;
