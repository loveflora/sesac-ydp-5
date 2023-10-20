import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

// ReactNode, ReactChild, ReactElement 타입 비교
// https://merrily-code.tistory.com/209

// children 자주 사용됨 !!!

export default function Card({ title, children }: CardProps) {
  return (
    <div>
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  );
}
