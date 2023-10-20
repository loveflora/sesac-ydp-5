import React, { useState, useRef } from 'react';
import { ToDoItem } from '../types/types';
import TodoItem from './TodoItem';

// interface ToDoItem {
//   id: number;
//   text: string;
//   completed: boolean;
// }

export default function TodoList() {
  // 초기값은 빈 배열인데, 타입이 배열
  const [todos, setTodos] = useState<ToDoItem[]>([]); // 전체 투두 목록
  const [newTodo, setNewTodo] = useState<string>(''); // 새로 추가될 투두 하나
  const inputRef = useRef<HTMLInputElement>(null);
  // 자주 사용 : <HTMLDivElement>

  const addTodo = () => {
    if (newTodo!.trim()) return;

    const updatedTodos = [
      ...todos,
      { id: Date.now(), text: newTodo, completed: false },
    ];

    setTodos(updatedTodos); // 전체 투두에 새로운 투두 추가
    setNewTodo(''); // input 초기화
  };

  // todo 아이템 완료 상태 변경 함수
  const toggleComplete = (targetId: number) => {
    // console.log(`${id}번 투두 완료 상태 수정됨 !`);

    const updatedTodos = todos.map((todo) => {
      return todo.id === targetId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodos(updatedTodos);
  };

  //] useRef로 생성한 inputRef를 사용해 입력창에 포커싱
  const focusInput = () => {
    //\ inputRef.focus() 가 있다면
    // if (inputRef.current) {
    //   inputRef.current.focus();
    // }

    inputRef.current?.focus();

    //\ error !!!
    // inputRef.current.focus();
    // -> inputRef가 없으면 null.focus() 라서 error
  };

  //] key down event 입력 시, todo 추가
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing) {
      return;
    }

    if (event.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="add new todo !"
          ref={inputRef} // ref 연결
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTodo}>ADD</button>
        <button onClick={focusInput}>FOCUS</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        ))}
      </ul>
    </div>
  );
}
