import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';


const ProjectCard = ({project}) => {
    const [visible, setVisible] = useState(false)
    function getIcon(icon, index) {
        // Si el icono es un componente JSX directamente
        if (React.isValidElement(icon)) {
          return React.cloneElement(icon, { key: index });
        }
      
        // Si el icono es de FontAwesome
        if (typeof icon === 'object' && icon.prefix && icon.iconName) {
          return <FontAwesomeIcon key={index} icon={icon} className='h-4'/>;
        }
        // Si el icono es inválido o no reconocido
        console.log('icon not found');
        return null;
      }
    
  return (
        <motion.div className='flex flex-row gap-5 items-center
         w-full shadow-lg text-white
        bg-gradient-to-r from-gray-700/50 via-gray-400/50 to-gray-800/50
        backdrop-blur border border-gray-600 
       p-3 rounded-lg'
       whileHover={{scale: 1.1}}
       transition={{
         type: 'spring',
       }}
       >
        <motion.div className='flex flex-col items-center justify-center gap-3'>
        <strong className='flex flex-col items-center'>
            <p>{project.name} </p>
          <p className='flex
        flex-row gap-2'>{project.language.map((lang, index)=>{
            return getIcon(lang, index)
          })}</p>
           </strong>
        {<AnimatePresence>
          {visible ? (
          <motion.div className='justify-center 
          items-center flex
          flex-row gap-2
          p-3'
          initial={{opacity: 0, x: -30}}
          animate={{opacity: 1, x: 0}}
          transition={{duration:0.5}}>
          
        <motion.div className='flex flex-col gap-2 justify-center'>
          <p>{project.description}</p>
          <p>Techstack: {project.technologies}</p>
          <p>Powered by: {project.powered}</p>
          <p className='flex flex-row gap-2'>Language(s): {project.language.map((lang, index)=>{
            return getIcon(lang, index)
          })}</p>
          <a href={project.github} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faGithub} 
        className='h-8 hover:text-green-500' /> </a>
        </motion.div>
        </motion.div>) : (
            <img className='rounded-lg' src={project.image} alt={project.name} 
        width='300px' height='100px' />
        ) }
        </AnimatePresence>
        }
        </motion.div>
         <p className='text-gray-400 hover:cursor-pointer hover:text-green-500' onClick={()=>{
           setVisible(!visible);
         }}>
         { visible ? <KeyboardDoubleArrowLeftIcon/> : <KeyboardDoubleArrowRightIcon/>}</p>
      </motion.div>
  )
}

export default ProjectCard
