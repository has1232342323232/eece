import React, { useState } from 'react';
import './Gallery.css';
import image5 from '../../../Assets/images/pust lake.jpg';

const Gallery = () => {
  const images = [
    { id: 1, src: image5, title: 'PUST Lake' },
    { id: 2, src: image5, title: 'PUST Lake' },
    { id: 3, src: image5, title: 'PUST Lake' },
    { id: 4, src: image5, title: 'PUST Lake' },
    { id: 5, src: image5, title: 'PUST Lake' },
    { id: 7, src: image5, title: 'PUST Lake' },
    { id: 8, src: image5, title: 'PUST Lake' },
    { id: 9, src: image5, title: 'PUST Lake' },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [displayCount, setDisplayCount] = useState(6);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setLightboxOpen(false);
  };

  const handleSeeAll = () => {
    setDisplayCount(images.length);
  };

  const handleSeeLess = () => {
    setDisplayCount(6);
  };

  const displayedImages = images.slice(0, displayCount);

  return (
    <div className="gallery-container text-center ">
      <h2 className='text-3xl p-6 text-custom-pink'>Photo Gallery</h2>
      <div className="image-grid">
        {displayedImages.map((image) => (
          <div
            key={image.id}
            className="image-item "
            onClick={() => openLightbox(image)}
          >
            <img src={image.src} alt={image.title} />
            <p>{image.title}</p>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="lightbox open" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img src={selectedImage.src} alt={selectedImage.title} />
            <p>{selectedImage.title}</p>
            <span className="close-btn" onClick={closeLightbox}>
              &times;
            </span>
          </div>
        </div>
      )}

      {displayCount === 6 && images.length > 6 && (
        <button className="see-more-btn btn bg-custom-pink btn-sm mt-4" onClick={handleSeeAll}>
          See More
        </button>
      )}

      {displayCount > 6 && (
        <button className="see-less-btn btn bg-custom-pink btn-sm mt-4" onClick={handleSeeLess}>
          See Less
        </button>
      )}
    </div>
  );
};

export default Gallery;
