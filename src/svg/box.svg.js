import React from 'react'
import { motion } from 'framer-motion'

const BoxSvg = () => {

  return (<motion.svg style={{overflow: 'visible'}} 
    className='z-0 absolute left-1 bottom-[100px] h-full opacity-90' 
  width="203" height="170" viewBox="0 0 283 210" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path fill-rule="evenodd" clip-rule="evenodd" 
d="M281 210H1.99999L0.32605 208.905L136.326 
0.905486L138 2L3.30768 208H279.625L138 2L139.648 
0.866943L282.648 208.867L281 210Z" 
fill='none'
stroke="rgb(116,214,134)"
strokeWidth='3'
initial={{ 
    opacity:1,
    pathLength: 0,}}
animate={{
    opacity:1,
    pathLength: 1,
}}
transition={{
    duration: 6,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "reverse",
}}/>
    </motion.svg>
    )
}
export default BoxSvg