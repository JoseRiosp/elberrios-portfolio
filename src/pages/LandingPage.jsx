import React from 'react'
import SideCard from './SideCard'
import MainPage from './MainPage'

const LandingPage = () => {
  return (
    <div className=' flex flex-col justify-center items-center w-full md:flex-row'>
      <SideCard/>
      <MainPage/>
    </div>
  )
}

export default LandingPage
