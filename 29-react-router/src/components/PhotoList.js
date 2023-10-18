import React, { useState, useEffect } from 'react';
import PhotoItem from './PhotoItem';
import axios from 'axios';

export default function PhotoList() {
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/photos'
    );

    // 10개만 가져오기
    setPhotos(response.data.slice(0, 10));
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div>
      {photos.map((photo) => (
        <PhotoItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
}
