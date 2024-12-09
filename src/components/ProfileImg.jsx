import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { motion } from 'framer-motion'

const ProfileImg = () => {

    const [imageLoaded, setimageLoaded] = useState(false)
    useEffect(() => {
     const img = new Image();
     img.src='/elberrios.JPG';
     img.onload =()=> setimageLoaded(true);
    }, [])
    

  return (
    <div className='rounded-full relative w-auto h-auto shadow shadow-lg'>
        {imageLoaded ? (
        <div>
            <img src='/elberrios.JPG' 
            className='relative rounded-full'
            alt='Elber Rios pic'>
        </img> 
        
    <motion.div 
        className='absolute top-2 right-1 bg-black rounded-full h-20 w-20 z-1' 
        initial={{ y:0 }}
        animate={{ y: [0, -10, 0]}}
        transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut'
        }}> 
            <motion.div
            className='absolute bg-white rounded-full h-20 w-20 '
            whileHover={{scale: 1.1}}
            transition={{
                type: 'spring',
                stiffness: 400, 
                damping: 10
            }}> <a href='https://github.com/JoseRiosp' target='_blank' rel='noopener noreferrer'>
                <img className='z-10 hover:cursor-pointer' src='/githubIcon.png' alt='github icon'></img>
                </a>
            </motion.div> 

        
        </motion.div>
            
        <motion.div 
        className=' absolute top-2 left-1 bg-[rgb(43,101,194)] shadow shadow-lg rounded-full h-20 w-20 z-1' 
        initial={{ y:0 }}
        animate={{ y: [0, -10, 0]}}
        transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut'
        }}> 
            <motion.div
            className='absolute rounded-full h-full w-full '
            whileHover={{scale: 1.1}}
            transition={{
                type: 'spring',
                stiffness: 400, 
                damping: 10
            }}> <a href='https://www.linkedin.com/in/elber-rios-0a622213a/' target='_blank' rel='noopener noreferrer'>
                <img className='z-10 hover:cursor-pointer' src='/linkedinIcon.png' alt='github icon'></img>
                </a>
            </motion.div> 
        </motion.div>
        </div>) : <p className='text-gray-400'>Loading...</p>}


    </div>
  )
}

export default ProfileImg
