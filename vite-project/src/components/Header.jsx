import { HiArrowRight } from "react-icons/hi";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import { useState } from "react";
import { PiUserSwitch } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion'



const Header = () => {
  const [isopen, setIsOpen] = useState(false)

    

  return (
    <div className="nav bg-white fixed p-4 w-full">
    
      <div className="flex justify-between w-full">
        <a className="font-bold text-[40px] cursor-pointer ">NORWOOD</a>
        <button className="md:hidden" onClick={()=>{setIsOpen(!isopen)}}>{isopen ? <AiOutlineClose className="h-10 w-8" /> : <AiOutlineMenu className="h-10 w-5"/>  }</button>
        
        <div className="hidden md:flex gap-3 items-center">
              <motion.a 
               className="group hover:bg-black cursor-pointer hover:text-white transition-all duration-200 border-[2px] border-black font-medium text-base rounded-full flex items-center py-1 px-6">About <HiArrowRight className="ml-3 transition-all group-hover:translate-x-1 group-hover:-rotate-45 "/></motion.a>
              <a className="group hover:bg-white cursor-pointer hover:text-black transition-all duration-200 bg-black text-white font-medium text-base border-[2px] border-black rounded-full flex items-center  
              py-1 px-6">Schedule a Consultation <HiArrowRight className="ml-3 transition-all  group-hover:translate-x-1 group-hover:-rotate-45"/></a>
          </div>

        </div>
           
    
      
     {isopen &&  <div className="md:hidden mt-24 flex flex-col items-start gap-5">
        <a className=" hover:bg-black cursor-pointer hover:text-white border-[2px] border-black font-medium text-base rounded-full flex items-center py-1 px-6">About <HiArrowRight className="ml-3"/></a>
        <a className=" hover:bg-white cursor-pointer hover:text-black bg-black text-white font-medium text-base border-[2px] border-black rounded-full flex items-center  
        py-1 px-6">Schedule a Consultation <HiArrowRight className="ml-3"/></a>
        </div>}

       
    
     
  </div>
  

  )
}

export default Header
