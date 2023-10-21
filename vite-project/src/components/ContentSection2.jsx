import { HiArrowRight } from "react-icons/hi"

const ContentSection2 = () => {
  return (
  
       <div className="flex flex-col gap-10 mt-10 px-10 ">
        
          <h1 className="text-6xl md:text-9xl font-medium">Let's work <br />together</h1>
          <div className="w-[430px] md:w-[930px]">
          <p className=" font-extralight text-[15px] md:text-lg">Let's create something beautiful together! At Norwood Interiors, we believe
             in  collaboration to bring your unique vision to life. Whether you're a homeowner
             or business  owner, let's work together to take your space to the next level.
              Get in touch and let's get started!
          </p>
          </div>
          
          <a className=" hover:bg-white cursor-pointer hover:text-black bg-black text-white font-medium text-base border-[2px] border-black rounded-full py-1 px-6 flex w-[258px] items-center">Schedule a Consultation <HiArrowRight className="ml-3"/></a>
         
        </div>
   
  )
}

export default ContentSection2
