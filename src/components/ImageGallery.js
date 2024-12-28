import React, { useEffect, useState } from 'react';

function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {

    fetch('/api/images')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Ошибка при загрузке изображений:', error));
  }, []);

  return (
    <div className="image-gallery">
      {images.length > 0 ? (
        images.map(image => (
          <div key={image._id} className="image-item">
            <img src={`/images/${image.imageUrl || image._id}`} alt={image.title} />
            <h3>{image.title}</h3>
            <p>{image.description}</p>
          </div>
        ))
      ) : (
        <p>Изображения не найдены</p>
      )}
    </div>
  );
}

export default ImageGallery;
