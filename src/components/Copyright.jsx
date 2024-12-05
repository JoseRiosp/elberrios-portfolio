import React from 'react'

import { Link } from '@mui/material';
import { Typography } from '@mui/material';


const Copyright = () => {
  return (
    <Typography className='p-6' variant='body2' color='WhiteText' align='center'>
        {'© '}
        {'Copyright  '}
        { 'Elber Rios  ' }
        {new Date().getFullYear()}
    </Typography>
  )
}

export default Copyright
