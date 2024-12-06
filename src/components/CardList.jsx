import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { projects } from '../models/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faJs } from '@fortawesome/free-brands-svg-icons';

function Card({ id, type, projects}){
  
  const projectLength = projects.length;

   return(
    <Link to={`/projects/${id}`} className='card-list-link'>
    <motion.div className='bg-black rounded-lg font-play h-full p-3'
    whileHover={{scale: 1.1}}
    transition={{
      type: 'spring',
    }}>
      <h1 className='text-white hover:text-green-400
        font-bold font-play text-{14px} py-3'>
        {type}
      </h1>
      {projectLength >  0 ? projects.map((project)=>{
      return(
      <div className='flex flex-row text-black items-center gap-2 
      rounded-lg bg-white p-2'>
        <img src={project.image} alt={project.name} 
        width='300px' height='100px' ></img>
        <div className='flex flex-col gap-2 p-2'>
          <strong>{project.name}</strong>
          <p>{project.description}</p>
          <p>Techstack: {project.technologies}</p>
          <p>Powered by: {project.powered}</p>
          <p>Languages: <FontAwesomeIcon icon={faJs} className='h-5' /> </p>
          <a href={project.github} target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub} 
        className='h-8 hover:text-green-500' /> </a>
        </div>
      </div>)
     }): <p>There are no proyects yet</p> }
      </motion.div>
    </Link>
    )}

const CardList = ({selectedId, onSelectedCard}) => {
  return (
    <div className='flex flex-col gap-2'>
      {projects.map((card)=>{
        return (<Card key={card.id} id={card.id} projects={card.projects} type={card.type} 
          isSelected={card.id===selectedId}/>)
      })}
    </div>
  )
}

export default CardList
