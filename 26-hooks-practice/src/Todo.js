import React, { useState, useRef } from 'react';

export default function Todo() {
  const [todo, setTodo] = useState('');

  const [todoList, setTodoList] = useState([]);

  const inputTodoRef = useRef();

  ////////////////////////////////////////

  //] 할 일 추가
  const addHandler = () => {
    // 10개 이상 추가 안됨
    if (todoList.length >= 10) return;

    // 입력 안했을 경우, focus 처리
    if (!todo.trim()) {
      return inputTodoRef.current.focus();
    }

    const newTodo = {
      id: todoList.length + 1,
      todo,
      isChecked: false,
    };

    const newTodoList = [...todoList, newTodo];

    setTodoList(newTodoList);

    setTodo('');
  };

  //] 체크 onChange
  const checkHandler = (id) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.map((v) => {
        if (v.id === id) {
          return { ...v, isChecked: !v.isChecked };
        }
        return v;
      });
    });
  };

  //] 체크 삭제
  const deleteHandler = () => {
    const filteredTodoList = todoList.filter((todo) => !todo.isChecked);
    setTodoList(filteredTodoList);
  };

  return (
    <div>
      <input
        placeholder="할 일 입력"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        ref={inputTodoRef}
      />
      <button onClick={addHandler}>추가</button>
      <div>
        <ul>
          {todoList.map((v) => {
            return (
              <li key={v.id}>
                <input type="checkbox" onChange={() => checkHandler(v.id)} />
                {v.todo}
              </li>
            );
          })}
        </ul>
      </div>
      <br />
      {todoList.length >= 10 && <h3>할 일이 너무 많아요 !</h3>}
      <button onClick={deleteHandler}>완료된 할 일 삭제</button>
    </div>
  );
}
