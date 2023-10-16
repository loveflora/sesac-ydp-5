import React from 'react';

export default function PhotoItem({ photo }) {
  return (
    <div>
      <ul>
        <li>사진 제목: {photo.title}</li>
        <br />
        <img src={photo.url} style={{ width: '200px' }} />
        <hr />
      </ul>
    </div>
  );
}
