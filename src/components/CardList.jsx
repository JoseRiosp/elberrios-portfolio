import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { category } from '../models/category';

function Card({ id, title}){

   return(
    <Link to={`/projects/${id}`} className='card-list-link'>
    <div className='bg-black rounded-lg h-full p-3'>
      <motion.div className='card-content'>
        <motion.div className='card-image-container absolute'>
        </motion.div>
      <motion.div className='card-title-container'>
        <h1 className='text-white text-{14px}'>{title}</h1>
      </motion.div>
      </motion.div>
      </div>
    </Link>
   )
}

const CardList = ({selectedId, onSelectedCard}) => {
  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-2'>
      {category.map((card)=>{
        return (<Card key={card.id} id={card.id} title={card.title} 
          isSelected={card.id===selectedId}/>)
      })}
    </div>
  )
}

export default CardList
