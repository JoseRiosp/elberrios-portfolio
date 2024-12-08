import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { skillIcons } from '../models/skill-icons'

const Skills = () => {

  function getIcon(icon, index) {
    // Si el icono es un componente JSX directamente
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon, { key: index, className: 'h-20' });
    }
  
    // Si el icono es de FontAwesome
    if (typeof icon === 'object' && icon.prefix && icon.iconName) {
      return <FontAwesomeIcon key={index} icon={icon} className="h-20" />;
    }
    // Si el icono es inválido o no reconocido
    console.log('icon not found');
    return null;
  }
  
  return (
    <div className='relative text-white w-[700px] overflow-hidden'>
        <hr className='border-t-1/2 border-gray-300'></hr>
        <div className="absolute bottom-0 left-0 w-20 h-full 
        bg-gradient-to-r from-[rgb(26,27,37)] to-transparent z-10 
        pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-20 h-full 
      bg-gradient-to-l from-[rgb(26,27,37)] to-transparent z-10 
      pointer-events-none"></div>
      <motion.div
      className='p-3 opacity-80 flex flex-row justify-start gap-5'
      animate={{x:['0%', '-100%']}}
      transition={{
        repeat:Infinity,
        duration: 10,
        repeatType: 'reverse',
        ease: 'linear'
      }}>
        {skillIcons.concat(skillIcons).map((item, index)=>{
            return (
              <div className='text-white'>
                { getIcon(item.icon, index)}
              </div>
               
            )
        })}
      </motion.div>
      <hr className='border-t-1/2 border-gray-300'></hr>
    </div>
  )
}

export default Skills
