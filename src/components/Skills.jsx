import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { skillIcons } from '../models/skill-icons'

const Skills = () => {

  function getIcon(icon, index) {
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon, { key: index});
    }
    if (typeof icon === 'object' && icon.prefix && icon.iconName) {
      return <FontAwesomeIcon key={index} icon={icon} className="h-20" />;
    }
    console.log('icon not found');
    return null;
  }
  
  return (
    <motion.div className='relative text-white overflow-hidden 
    bg-gradient-to-r from-transparent via-gray-800 to-transparent'>
        <hr className='border-t-1/2 border-gray-300'></hr>
        <div className="absolute bottom-0 left-0 w-20 h-full 
        bg-gradient-to-r from-[rgb(26,27,37)] to-transparent z-10 
        pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-20 h-full 
      bg-gradient-to-l from-[rgb(26,27,37)] to-transparent z-10 
      pointer-events-none"></div>
      <motion.div
      className='p-3 opacity-80 flex w-[700px]
      flex-row gap-5'
      animate={{x:['0%', '-100%']}}
      transition={{
        repeat:Infinity,
        duration: 10,
        repeatType: 'reverse',
        ease: 'linear'
      }}>
        {skillIcons.concat(skillIcons).map((item, index)=>{
            return (<i>
                {getIcon(item.icon, index)}
            </i>)
        })}
      </motion.div>
      <hr className='border-t-1/2 border-gray-300'></hr>
    </motion.div>
  )
}

export default Skills
