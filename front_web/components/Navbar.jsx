'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import custom from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        Docflix
      </h2>
      <p className='text-white'>Home</p>
      <p className='text-white'>Catálogo</p>
      <p className='text-white'>Mi Lista</p>
      <img
        src="/user.svg"
        alt="user"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
