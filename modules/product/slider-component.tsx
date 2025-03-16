// components/ProductSlider.js
'use client'

import { useState, useRef } from 'react';

import Image from 'next/image';

export const ProductSlider = ({ images }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const sliderRef = useRef(null);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleDragStart = (e: any) => {
    setIsDragging(true);
    setStartPosition(e.clientX || e.touches[0].clientX);
  };

  const handleDragEnd = (e: any) => {
    if (!isDragging) return;
    const endPosition = e.clientX || e.changedTouches[0].clientX;
    const diff = startPosition - endPosition;

    if (diff > 50) {
      nextImage();
    } else if (diff < -50) {
      prevImage();
    }

    setIsDragging(false);
  };

  const handleDragging = (e: any) => {
    if (!isDragging) return;
    const currentPosition = e.clientX || e.touches[0].clientX;
    const diff = startPosition - currentPosition;
  };

  return (
    <div
      className="flex flex-col gap-2"
      ref={sliderRef}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragging}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragging}
      onTouchEnd={handleDragEnd}
    >
      <div className="flex flex-col justify-center items-center">
        <Image
          className="slider-image"
          src={images[currentIndex].path}
          alt={`Produto ${currentIndex + 1}`}
          width={750}
          height={750}
        />
      </div>
      <div className="dots flex gap-1 items-center justify-center italic">
        {images.map((_: any, index: any) => (
          <Image
            key={index}
            className=''
            onClick={() => setCurrentIndex(index)}
            src={(index === currentIndex) ? '/circle-complete.svg' : '/circle-no-complete.svg'}
            width={(index === currentIndex) ? 10 : 8}
            height={(index === currentIndex) ? 10 : 8}
            alt={`dot ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
