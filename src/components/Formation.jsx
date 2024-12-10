import React from 'react'
import { certifications } from '../models/certifications'
import { institutions } from '../models/certifications'
import SchoolIcon from '@mui/icons-material/School';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { motion } from 'framer-motion';
import JaverianaSvg from '../svg/javeriana.svg';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Formation = () => {
  return (
    <motion.div className='flex flex-col md:flex-row p-3 font-play h-auto gap-5 rounded-lg'>
      <motion.div className='bg-gradient-to-b 
      from-[rgb(26,27,37)]/50 via-white/50 
        to-[rgb(26,27,37)]/50 p-3 rounded-lg hover:border
        hover:border-gray-600
       flex flex-col gap-3 w-full'
       whileHover={{scale:1.1}}
       transition={{
        type: 'spring'
       }}
       >
        <h1 className='text-[17px]'>INSTITUTIONS <SchoolIcon/> </h1>
        <hr className='border-t-1/2 border-gray-300 w-full'></hr>
        {institutions.map((inst)=>{
            return (
                <div className='flex flex-row items-center justify-center gap-4 '>
                     <a href={inst.link} target='_blank' 
                     className='w-1/2 p-2' rel='noreferrer noopener'>
                        <JaverianaSvg/> 
                     </a>
                    <div className='flex flex-col gap-3 p-2'>
                     <p>{inst.name}</p>
                     <p>Colombia <LocationOnIcon/></p>
                    <p><strong>{inst.title} -</strong>{inst.degree}</p>
                    <p><strong>Finished: </strong>{inst.finishedAt}</p>
                    <p><strong>Publications: </strong> 
                    <a href={inst.publication} target='_blank' rel='noopener noreferrer'
                    className='text-green-500'>See at repository
                    <ArrowOutwardIcon className='text-[10px]'/></a> </p>
                     </div>
                    </div>
                

            )
        })}
      </motion.div>
      <motion.div className='bg-gradient-to-b 
      from-[rgb(26,27,37)]/30 via-white/30 
        to-[rgb(26,27,37)]/30 p-3 rounded-lg hover:border
        hover:border-gray-600
       flex flex-col gap-3 w-full'
       whileHover={{scale:1.1}}
       initial={{opacity: 0, y:100}}
       whileInView={{opacity: 1, y:0}}
       transition={{
        duration: 1,
        type: 'spring'
       }}>
        <h1 className='text-[17px]'>CERTIFICATIONS <TaskAltIcon/></h1>
        <hr className='border-t-1/2 border-gray-300 w-full'></hr>
        {certifications.map((certi)=>{
            return(
                <motion.a href={certi.link} 
                className='flex border items-center relative
                flex-row gap-3
                bg-gradient-to-r from-[rgb(26,27,37)]/30 via-gray-500/30 
                to-[rgb(26,27,37)]/30 text-[12px]
                hover:bg-gradient-to-r hover:from-[rgb(26,27,37)]/80 
                hover:via-gray-500/80 hover:to-[rgb(26,27,37)]/80
                border-gray-400 rounded-lg p-2'
                target='_blank' rel='noreferrer nooopener'
                whileHover={{scale:1.1}}
                transition={{type: 'spring'}}
                >
                    <i className='text-green-400'>{certi.icon}</i>
                    <div>
                        <strong>{certi.name}</strong>
                        <p>{certi.institution}</p>
                        <p>{certi.finishedAt}</p>
                    </div>
                    <ArrowOutwardIcon
                     className='absolute top-0 right-1 
                    hover:text-green-400 w-[2px] h-[2px]'
                    />
                </motion.a>
            )
        })}
      </motion.div>
    </motion.div>
  )
}

export default Formation
