import FileCopyIcon from '@mui/icons-material/FileCopy';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';

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
            case 'personal':
                return <AccountCircleIcon/>
            default:
        }
    }

const links =[
    { path:'/', icon: 'home'},
    { path: '/#projects', icon: 'projects' },
    { path: '/#skills', icon: 'skills' },
    { path: '/#personal', icon: 'personal'}

];


  return (
    <div className='flex flex-row gap-6'>
        <ScrollToSection/>
      {links.map((link)=>{
       return( <Link to={link.path}> {getIcon(link.icon)} </Link>
        )
      })}
    </div>
  )
}

export default NavLinks