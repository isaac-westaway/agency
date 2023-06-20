"use client"

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export function Slider() {
  return (
    <Splide options={ { rewind: true } } aria-label="React Splide Example">
      <SplideSlide className="border">
        <img src="image1.jpg" alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img src="image2.jpg" alt="Image 2"/>
      </SplideSlide>
    </Splide>
  );
}