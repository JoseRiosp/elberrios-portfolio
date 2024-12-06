import React from 'react'
import '@fontsource/micro-5'
import BoxSvg from '../svg/box.svg'
import LineSvg from '../svg/line.svg'

const Welcome = () => {
 
  return (
    <div className='flex p-3 flex-col relative text-white h-screen z-0 gap-5 justify-center'>
       <LineSvg/>
       <BoxSvg/>
      <div className='relative z-20 flex flex-col jusstify-center'>
          <h1 className='font-micro5 text-[80px]'>Front-End</h1>
          <h1 className='font-play text-[40px]' >Developer</h1>
        </div>
    <div>
        <p className='font-play mr-4 text-[18px]'>Specialize in designing  
          <span className='text-green-400'> UX/UI</span> interfaces with appealing 
            modern designs. Always excited to create completely 
            <span className='text-green-400'> Full-Stack </span> 
            intuitive apps with new challenging structures, for small and bigger visions. 
          </p>
    </div>
      <div>
        
      </div>
    </div>
  )
}

export default Welcome
