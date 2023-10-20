import Card from './components/Card';
import Student from './components/Student';
import TodoList from './components/TodoList';

function App() {
  const handleClick = (name: string, grade: number, part?: string) => {
    console.log(
      `안녕, 난 ${name}이고, ${grade} 학년이야 ! 전공은 ${
        part || '자유전공'
      }입니다 ~`
    );
  };

  return (
    <div className="App">
      <Student name="새싹인" grade={3} handleClick={handleClick} />
      <br />
      <Student name="원주민" grade={2} part="CS" handleClick={handleClick} />
      <br />
      <Card title="오늘 배울 것은 ?">
        <h1> TS with React </h1>
      </Card>
      <TodoList />
    </div>
  );
}

export default App;
