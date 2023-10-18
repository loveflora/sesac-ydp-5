import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  // state 처럼 쓰는 Hook

  console.log(searchParams); // URLSearchParams {size: 1}
  console.log(searchParams.get('mode')); // key의 value를 가져옴  // Dark

  return (
    <div className={['Main', searchParams.get('mode')].join(' ')}>
      {/* Main Dark */}
      {/* Main null */}
      <h1>MainPage</h1>
      <button
        onClick={() => {
          setSearchParams({ mode: 'Dark' });
        }}
      >
        DarkMode
      </button>
    </div>
  );
}
