"use client";

// components/ImageSlider.jsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ImageSlider = ({ slides }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(goToNext, 2000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <div className='flex py-2 h-[500px] items-center bg-black w-full'>
      <div className="relative w-full h-full overflow-hidden">

        {/* Content Layer */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white p-6 max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">{slides[currentIndex].title}</h1>
            <p className="text-xl mb-8">{slides[currentIndex].description}</p>
            <Link href="/coleccion" className="btn btn-lg border-none">
              {slides[currentIndex].buttonText}
            </Link>
          </div>
        </div>

        {/* Image */}
        <div
          className="w-full h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="flex h-full">
            {slides.map((slide: any, index: any) => (
              <div className="min-w-full h-full relative" key={index}>
                <Image
                  src={slide.imageUrl}
                  alt={slide.title}
                  layout="fill"
                  objectFit="cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_: any, slideIndex: any) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`w-3 h-3 rounded-full cursor-pointer ${slideIndex === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;