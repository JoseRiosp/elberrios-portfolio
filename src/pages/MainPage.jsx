import React from 'react'
import Welcome from '../main/Welcome'
import { motion } from 'framer-motion'
//import Projects from '../main/Projects'
import CardList from '../components/CardList'
import { AnimatePresence } from 'framer-motion'
//import CardOpen from '../components/CardOpen'
import { useParams } from 'react-router'
import Skills from '../components/Skills'
import Formation from '../components/Formation'

const MainPage = () => {
  const { id } = useParams(); 
console.log(id)
  return (
    <div className='h-full w-auto'>
        <motion.section
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y:100}}
        transition={{duration: 0.5}}>
        <Welcome/>
        </motion.section>
        <motion.section id='skills' className='w-full h-auto'
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y:100}}
        transition={{duration: 0.5}}>
          <Skills/>
        </motion.section>
      <motion.section id='projects' className=' text-white h-auto 
      w-full flex flex-col p-5' 
      whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y:100}}
        transition={{duration: 0.5}}>
        <h1 className='font-play text-[18px]'>Latest Projects</h1>
        <div className='w-full py-5'>
          <CardList selectedId={id}>
          </CardList>
        </div>
      </motion.section>
      <motion.section id='formation' 
      className='text-white h-auto w-full flex flex-col gap-3 p-5'
      whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y:100}}
        transition={{duration: 0.5}}>
        <h1 className='font-play text-[18px]'>Formation</h1>
        <Formation/>
      </motion.section>
      <motion.section id='personal'
      className='text-white h-auto w-full flex flex-col gap-3 p-5'>
        <h1 className='font-play text-[18px]'>Personal</h1>
        <div className='text-[18px] text-green-400'>Working on it...</div>
      </motion.section>
    </div>
  )
}

export default MainPage
