import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const {
    register, // input 할당, value 변경 감지
    handleSubmit, // form submit 시 호출
    formState: { errors }, // 폼 상태 객체
    watch, // 특정 form field 값을 실시간으로 사용
  } = useForm();

  //] handleSubmit(funcA[, funcB]) : 2개의 함수를 받음
  //-- funcA : 필수, 유효할 때 생성
  //-- funcB : 선택, 유요하지 않을 때 생성

  // funcA
  const onValid = (data) => {
    console.log('onValid', data);
    //) form 안에서 넣은 input 값들
    // onValid {username: '11', email: '22'}
  };

  // funcB
  const onInvalid = (err) => {
    console.log('onInvalid', err);
  };

  //   //-- errors
  //   console.log('errors >>>', errors);

  //   //-- watch
  //   console.log('watch >>>', watch('username'));
  // username에 값을 입력할 때마다 콘솔 찍힘

  //////////////////////////////////////

  return (
    <div>
      <h1>react-hook-form 라이브러리 DEMO</h1>

      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input
          type="text"
          placeholder="username"
          {...register('username', {
            required: '이름을 입력해주세요',
            minLength: {
              message: '이름은 최소 2글자 이상 작성해주세요.',
              value: 2,
            },
          })}
        />
        {/* 1. required */}
        {/* optional chaining 사용 */}
        {errors.username?.message}
        {/* errors에 username이 있다면, message 보여주기 */}

        <br />
        <input
          type="email"
          placeholder="email (gmail)"
          {...register('email', {
            required: '이메일을 입력해주세요',
            validate: {
              useGmail: (v) =>
                v.includes('gmail.com') || 'gmail로만 가입 가능합니다.',
            },
          })}
        />
        {/* 조건을 만족하지 않는 애만 errors에 표시 */}
        {/* 
            { email: 
              { type: "required", 
                message: "이름을 입력해주세요", 
                ref: input
              } 
            } 
        */}

        {errors.email?.message}

        <br />

        <input
          type="password"
          placeholder="password"
          {...register('password', {
            pattern: {
              minLength: {
                message: '비밀번호는 최소 6글자 이상 작성해주세요.',
                value: 6,
              },
              value: /.*\d+.*/,
              message: '비밀번호에 숫자가 포함되어야 합니다.',
            },
          })}
        />
        {errors.password?.message}

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
