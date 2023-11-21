'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import custom from '../styles';
import { navVariants, fadeIn, staggerContainer, zoomIn } from '../utils/motion';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { FreeMode, Pagination } from 'swiper/modules'

import { RxArrowTopRight } from 'react-icons/rx'

const FetchExample = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost/documentales');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // El segundo argumento es una lista de dependencias, pero en este caso, como no hay ninguna, se ejecutará solo una vez al montar el componente.

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='w-full mx-0 flex justify-center'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
              Titulo
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
              Founder Metaverus
            </p>
          </div>

          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
            “With the development of today's technology, metaverse is very
            useful for today's work, or can be called web 3.0. by using
            metaverse you can use it as anything”
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex items-center justify-center flex-col  w-full h-[900px]"
        >
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
            }}
            freeMode={false}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="w-full lg:max-w-[80%]"
          >
            {data && data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.img})` }}
                  />
                  <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                  <div className="relative flex flex-col gap-3">
                    <h1 className="text-xl lg:text-2xl">{item.titulo} </h1>
                    <p className="lg:text-[18px]">{item.descripcion} </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FetchExample;