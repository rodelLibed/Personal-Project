import React, {useRef} from 'react'
import {motion} from 'framer-motion'

const Maps = () => {
  
  return (
    <div className='flex justify-center items-center h-[100vh] w-full'>
     <motion.div drag  dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className="bg-black w-5 h-5" />
      <motion.button
       className='hover:bg-yellow-500 bg-green-500 text-white rounded-full px-10 py-4'>Hello</motion.button>
      <motion.input  whileFocus={{ scale: 1.2 }} className="outline border-black" />
     
    </div>
  )
}

export default Maps
