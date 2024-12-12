/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import eveningImg from '../assets/evening.png';
import cloudyImg from '../assets/cloudy.png'; // Image import
import rainImg from '../assets/rainy.png';

const CarouselFade = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { id: 1, imgSrc: eveningImg, alt: "Slide 1" },
    { id: 2, imgSrc: cloudyImg, alt: "Slide 2" },
    { id: 3, imgSrc: rainImg, alt: "Slide 3" }
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative w-[80%] h-[500px] mx-auto overflow-hidden mt-6 rounded-md">
      {/* Carousel Container */}
      <div className="flex transition-transform duration-1000 ease-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`, // Moves slides horizontally
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="flex-shrink-0 w-full ">
            <img
              src={slide.imgSrc}
              alt={slide.alt}
              className="w-full h-[40%] object-cover rounded-lg "
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-xl bg-black bg-opacity-50 p-2 rounded-full h-16"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-xl bg-black bg-opacity-50 p-2 rounded-full h-16"
      >
        &#8250;
      </button>
    </div>
  );
};

export default CarouselFade;
