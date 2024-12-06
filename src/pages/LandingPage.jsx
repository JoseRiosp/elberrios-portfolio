import React from 'react'
import SideCard from './SideCard'
import MainPage from './MainPage'
import NavLinks from '../components/navLinks'
import Copyright from '../components/Copyright'

const LandingPage = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <NavLinks/>
      <div className='flex flex-col md:flex-row'>
        <SideCard/>
        <MainPage/>
      </div>
      <footer className="text-white 
      flex flex-row items-center justify-center">
        <Copyright/>
      </footer>
    </div>
  )
}

export default LandingPage
