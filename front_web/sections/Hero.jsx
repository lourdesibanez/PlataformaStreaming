'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import FetchExample from './FetchExample';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} border border-lime-500 h-full w-screen`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false, amount:0.25}}
      className={`${styles.innerWidth} h-auto w-full mx-auto flex flex-col border border-yellow-400`}
    >
      <FetchExample/> 
    </motion.div>

  </section>
);

export default Hero;
