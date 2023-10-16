import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormPractice() {
  const {
    register, // input 할당, value 변경 감지
    handleSubmit, // form submit 시 호출
    formState: { errors }, // 폼 상태 객체
  } = useForm();

  const onValid = (data) => {
    console.log('onValid', data);
  };

  console.log(errors);

  return (
    <div>
      <h1>react-hook-form 실습</h1>
      {/* <form onSubmit={handleSubmit(onValid)}> */}
      <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
        <input
          type="text"
          placeholder="name"
          {...register('username', {
            required: '이름은 필수 항목입니다.',
          })}
        />
        {errors.username?.message}

        <br />

        <input
          type="number"
          placeholder="age"
          {...register('age', {
            validate: {
              positiveNumber: (v) =>
                v >= 0 || '0 이상의 숫자만 입력 가능합니다.',
            },
          })}
        />
        {errors.age?.message}

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// https://www.daleseo.com/react-hook-form/
