import React, { useEffect } from 'react';
import PostItem from './PostItem';

//] 부모 컴포넌트
export default function PostList() {
  return (
    <div>
      <header>Post List</header>
      <div>
        <PostItem />
      </div>
    </div>
  );
}
