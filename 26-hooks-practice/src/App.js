import CustomHook from "./CustomHook";
import Login from "./Login";
import Todo from "./Todo";

function App() {
  const id = "banana";
  const pw = "4321";

  return (
    <div className="App">
      <h1>Todo 실습</h1>
      <Todo />
      <hr />
      <h1>Login 실습</h1>
      <Login id={id} pw={pw} />
      <hr />
      <h1>Custom hook 만들기</h1>
      <CustomHook />
    </div>
  );
}

export default App;
