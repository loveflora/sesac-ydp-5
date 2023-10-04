import logo from './logo.svg';
import './App.css';
import SyntheticEvent from './SyntheticEvent';
import ClassBind from './ClassBind';
import Counter from './Counter';
import Handler_ex from './ex/Handler_ex';
import Handler_ex_Function from './ex/Handler_ex_Function';
import Handler_ex2 from './ex/Handler_ex2';
import Handler_ex3 from './ex/Handler_ex3';
import Handler_ex3_toggle from './ex/Handler_ex3_toggle';

function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <hr />
      <ClassBind />
      <hr />
      <Counter />
      <hr />
      <Handler_ex />
      <hr />
      <Handler_ex_Function />
      <hr />
      <Handler_ex2 />
      <hr />
      <Handler_ex3 />
      <hr />
      <Handler_ex3_toggle />
    </div>
  );
}

export default App;
