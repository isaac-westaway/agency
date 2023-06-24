"use client"

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import Image from 'next/image'

export function Slider() {
  return (
    <Splide options={ { rewind: true } } aria-label="React Splide Example">
      <SplideSlide className="border">
        <Image src="image1.jpg" alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <Image src="image2.jpg" alt="Image 2"/>
      </SplideSlide>
    </Splide>
  );
}