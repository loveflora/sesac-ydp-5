import './App.css';
import Counter from './Counter';
import SayFunction from './SayFunction';
import CounterFunction from './CounterFunction';
import Practice1 from './Practice1';
import Practice2 from './Practice2';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <SayFunction />
      <CounterFunction value={'Plus 1'} />
      <hr />
      <h2>실습</h2>
      <Practice1 />
      <Practice2 />
    </div>
  );
}

export default App;
