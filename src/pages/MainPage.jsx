import React from 'react'
import Welcome from '../main/Welcome'
//import Projects from '../main/Projects'
import CardList from '../components/CardList'
import { AnimatePresence } from 'framer-motion'
import CardOpen from '../components/CardOpen'
import { useParams } from 'react-router'

const MainPage = () => {
  const { id } = useParams(); 
console.log(id)
  return (
    <div className='bg-blue-200 h-full w-full'>
      <Welcome/>
      <section id='projects' className='bg-blue-300 h-full w-full flex flex-col p-3 items-center '>
        <h1>Latest Projects</h1>
        <div className='w-full'>
          <CardList selectedId={id}>
            <AnimatePresence>
              <CardOpen id={id} key='card'/>
            </AnimatePresence>
          </CardList>
        </div>
      </section>
      <section id='skills'>
        <h1>My skills</h1>
      </section>
      <section id='personal'>
        <h1>Favorite Quotes</h1>
      </section>
    </div>
  )
}

export default MainPage
