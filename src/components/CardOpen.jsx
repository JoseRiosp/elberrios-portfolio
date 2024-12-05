import React from 'react'
import { category } from '../models/category'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CardOpen = ({id}) => {
    const card = category.find((card)=> card.id === id);
    console.log(card)

  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration: 1, delay: 0.1}}
    style={{pointerEvents:'auto'}}
    className='fixed top-0 bg-blue-500 bottom-0 z-1 w-1/2'
    >
        <Link to={`/`} className='card-open-link'>
    <div className='bg-black rounded-lg h-full p-3'>
      <motion.div className='card-content'>
        <motion.div className='card-image-container absolute'>
        </motion.div>
      <motion.div className='card-title-container'>
        <h1 className='text-white text-{14px}'>Heey </h1>
      </motion.div>
      <motion.div animate>
        <p>Project 1</p>
        <p>Project 2</p>
        <p>Project 3</p>
        <p>Project 4</p>
      </motion.div>
      </motion.div>
      </div>
    </Link>
    </motion.div>
  );
}

export default CardOpen
