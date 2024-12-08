import React, { useState } from 'react'
import { animate, AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { projects } from '../models/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faJs } from '@fortawesome/free-brands-svg-icons';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import ProjectCard from './ProjectCard';

function Card({ id, type, projects}){

  const projectLength = projects.length;
   return(
    <motion.div className='grid grid-cols-2 gap-5 p-4'>
      {projectLength >  0 ? projects.map((project)=>{
     return <ProjectCard project={project}/>
     }): <p>There are no proyects yet</p> }
      </motion.div>
    )}

const CardList = ({selectedId, onSelectedCard}) => {
  return (
    <div className='flex flex-col gap-2'>
      {projects.map((card)=>{
        return (
          <motion.h1 className='text-white hover:text-green-400
        font-play text-{14px} py-3 
        bg-gradient-to-r from-black via-gray-800 to-black
         rounded-lg relative font-play p-3'
         whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y:100}}
        transition={{duration: 0.5}}>
        {card.type.toUpperCase()}
        <Card key={card.id} id={card.id} projects={card.projects} type={card.type} 
          isSelected={card.id===selectedId}/>
          </motion.h1>)
      })}
    </div>
  )
}

export default CardList
