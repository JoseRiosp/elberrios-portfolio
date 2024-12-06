import React from 'react'
import Welcome from '../main/Welcome'
//import Projects from '../main/Projects'
import CardList from '../components/CardList'
import { AnimatePresence } from 'framer-motion'
//import CardOpen from '../components/CardOpen'
import { useParams } from 'react-router'
import Skills from '../components/Skills'

const MainPage = () => {
  const { id } = useParams(); 
console.log(id)
  return (
    <div className='h-full w-full'>
        <Welcome/>
        <section id='skills' className='flex flex-col items-center'>
          <Skills/>
        </section>
      <section id='projects' className=' text-white h-screen w-full flex flex-col p-5'>
        <h1 className='font-play text-[18px]'>Latest Projects</h1>
        <div className='w-full py-5'>
          <CardList selectedId={id}>
          </CardList>
        </div>
      </section>
      <section id='personal'>
        <h1>Favorite Quotes</h1>
      </section>
    </div>
  )
}

export default MainPage
