import FileCopyIcon from '@mui/icons-material/FileCopy';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';

import React from 'react'
import { Link } from 'react-router';
import ScrollToSection from './ScrollToSection';

const NavLinks = () => {


    const getIcon=(icon)=>{
        switch (icon) {
            case 'home':
                return <HomeIcon/>
            case 'projects':
                return <FileCopyIcon/>
            case 'skills':
                return <AutoAwesomeIcon/>
            case 'formation':
                return <SchoolIcon/>
            case 'personal':
                return <AccountCircleIcon/>
            default:
        }
    }

const links =[
    { path:'/', icon: 'home'},
    { path: '/#projects', icon: 'projects' },
    {path: '/#formation', icon: 'formation'},
    { path: '/#skills', icon: 'skills' },
    { path: '/#personal', icon: 'personal'}

];


  return (
    <motion.div 
    whileHover={{scale: 1.1}}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    className='bg-black top-0 fixed
    text-white p-3 border border-gray-00
    rounded-full
    flex flex-row gap-6 hover:text-green-400 z-50'>
        <ScrollToSection/>
      {links.map((link, index)=>{
       return( <Link key={index} aria-label={link.path} to={link.path}> {getIcon(link.icon)} </Link>
        )
      })}
    </motion.div>
  )
}

export default NavLinks