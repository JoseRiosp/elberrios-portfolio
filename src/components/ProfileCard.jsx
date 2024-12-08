import React from 'react'
import AnimatedSvg from '../svg/test.svg'
import { motion } from 'framer-motion'
import { Image } from '@mui/icons-material'
import ProfileImg from './ProfileImg'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ProfileCard = () => {
  return (
    <div className='h-auto z-20 
     bg-white
    md:fixed text-[rgb(26,27,37)]
    flex p-3 w-1/2 md:w-1/4 flex-col rounded-lg font-play 
    items-center'>
      <p className='text-[25px] p-2' >Hey! I'm Elber Ríos</p>
      <ProfileImg/>
      <div className='p-3 pt-5 text-center text-gray-500 gap-3 font-bold flex flex-col justify-center'>
      <p> A <span className='text-[rgb(26,27,37)]'>Junior web developer </span> 
       with a growing excitement and experience in 
      <span className='text-[rgb(26,27,37)]'> backend development.</span> </p>
      <p>Follow my professional history, thoughts,
        and ongoing projects here.</p>
        </div>
      <p className='text-[rgb(26,27,37)]'>Colombia <LocationOnIcon/></p>
    </div>
  )
}

export default ProfileCard
