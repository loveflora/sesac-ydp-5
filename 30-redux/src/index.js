import React from 'react';
import ReactDOM from 'react-dom/client';
import App4 from './App4'; // 1 2 3 4 변경하기

//=== Redux ===
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; // store를 정의하는 메소드
import { composeWithDevTools } from 'redux-devtools-extension'; // redux 확장 프로그램
import rootReducer from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

//] store 정의 : 전역 상태를 관리하는 공간 (하나의 프로젝트에 하나만 !)
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
// configureStore(redux 객체, redux 확장 프로그램)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App4 />
      {/* 1 2 3 4 변경하기  */}
    </Provider>
  </React.StrictMode>
);
