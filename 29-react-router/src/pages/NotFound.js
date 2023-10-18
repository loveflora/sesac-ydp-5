import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
      <Link to="/">Link 컴포넌트로 홈 이동</Link>
      {/* reload (X) */}
      <br />
      <a href="/">a 태그로 홈 이동</a>
      {/* reload (O) */}
    </div>
  );
}
