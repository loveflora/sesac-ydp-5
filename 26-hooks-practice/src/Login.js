import React, { useState, useReducer } from "react";

const initState = { isLogin: false, message: "" };

const reducer = (prevState, action) => {
  switch (action.type) {
    case "WRONG_ID_PW":
      return { isLogin: false, message: "아이디랑 비밀번호 모두 오류!" };
    case "WRONG_ID":
      return { isLogin: false, message: "아이디 오류!" };
    case "WRONG_PW":
      return { isLogin: false, message: "비밀번호 오류!" };
    case "LOGIN":
      return { isLogin: true };
    case "LOGOUT":
      return { isLogin: false };
    default:
      return { isLogin: prevState.isLogin, message: prevState.message };
  }
};

export default function Login({ id, pw }) {
  const [state, dispatch] = useReducer(reducer, initState);
  const [inputs, setInputs] = useState({ inputId: "", inputPw: "" });
  const { inputId, inputPw } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const loginHandler = () => {
    console.log(inputId);
    console.log(inputPw);
    if (inputId !== id && inputPw === pw) {
      dispatch({ type: "WRONG_ID" });
    } else if (inputPw !== pw && inputId === id) {
      dispatch({ type: "WRONG_PW" });
    } else if (inputId !== id && inputPw !== pw) {
      dispatch({ type: "WRONG_ID_PW" });
    } else if (inputId === id && inputPw === pw) {
      dispatch({ type: "LOGIN" });
    }
  };

  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
    setInputs({ inputId: "", inputPw: "" });
  };

  return (
    <div>
      <div>
        정답 아이디: {id} / 정답 비번: {pw}
      </div>
      <br />
      {!state.isLogin ? (
        <div>
          ID
          <input
            type="text"
            name="inputId"
            value={inputId}
            onChange={onChange}
          />
          <br />
          PW
          <input
            type="password"
            name="inputPw"
            value={inputPw}
            onChange={onChange}
          />
          <br />
          <button onClick={loginHandler}>Login</button>
          {state.message ? <div>{state.message}</div> : ""}
        </div>
      ) : (
        <div>
          <h3>환영합니다~ {id}님! </h3>
          <button onClick={logoutHandler}>로그아웃</button>
        </div>
      )}
    </div>
  );
}
