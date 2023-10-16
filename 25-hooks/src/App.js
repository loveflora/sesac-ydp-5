import UseMemoEx from './components/UseMemoEx';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseReducerEx from './components/UseReducerEx';
import useTitle from './hooks/useTitle';
import Faq from './components/Faq';
import Form from './components/react-hook-form/Form';
import FormPractice from './components/react-hook-form/FormPractice';

function App() {
  // document.title 변경
  useTitle('Hooks 연습');

  return (
    <div className="App">
      <UseMemoEx />
      <hr />

      <UseCallbackEx />
      <hr />

      <UseCallbackEx2 postId={7} />
      <hr />

      <UseReducerEx />
      <hr />

      <Faq />
      <hr />

      <Form />
      <hr />

      <FormPractice />
      <hr />
    </div>
  );
}

export default App;
