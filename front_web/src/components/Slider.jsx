import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';

const Slider = () => {

  return (
    <Splide aria-label="My Favorite Images"
          options={ {
            type: 'loop',
            width : 800,
            gap   : '1rem',
            perPage: 3,
            perMove: 1,
            autoplay: true,
          } }
          className='slider-div'
        >
        <SplideSlide>
          <img className="splide__slide" src="/calden.jpg" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img className="splide__slide" src="/festival.jpg" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img className="splide__slide" src="/scooter.jpg" alt="Image 3" />
        </SplideSlide>
        <SplideSlide>
          <img className="splide__slide" src="/calden.jpg" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img className="splide__slide" src="/festival.jpg" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img className="splide__slide" src="/scooter.jpg" alt="Image 3" />
        </SplideSlide>
      </Splide>
  )
}

export default Slider