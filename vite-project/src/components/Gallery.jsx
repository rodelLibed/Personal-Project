import { motion } from 'framer-motion'

const Gallery = () => {
     const images = [
        {
            link: "https://framerusercontent.com/images/qzEEM6NZlFbuFsmXhirAOCIzrM.jpg?scale-down-to=4096",
            alt: "img1" 
        },
        {
            link: "https://framerusercontent.com/images/mP4aNEgHCqPrDwNWRV0fyUAjOA.jpg?scale-down-to=2048",
            alt: "img2" 
        },
        {
            link: "https://framerusercontent.com/images/2NT9FlazE1bFJo1IPZgnF5izXyI.jpg?scale-down-to=2048",
            alt: "img3" 
        },
        {
            link: "https://framerusercontent.com/images/TlNK8dgFohSyX6akaMAsIrmg.jpg?scale-down-to=2048",
            alt: "img4" 
        },
        {
            link: "https://framerusercontent.com/images/smglpwuoNizPFsSd5hBa22ofRE4.jpg?scale-down-to=2048",
            alt: "img5" 
        },
        {
            link: "https://framerusercontent.com/images/tHZf58kAHlIarl1gdcrKCY7IjA.jpg?scale-down-to=2048",
            alt: "img6" 
        },
     
     ]
  return (
    <motion.div className=" px-10 md:grid grid-cols-2 md:px-0 mt-10 "
    
    >

            {images.map((image)=>{
            return (
                <>
                <motion.img 
                initial={{ x: 0 }}
                
                key={image.id} className="h-[409px] w-full object-cover transition-all hover:rounded-full  duration-100" src={image.link} alt="" />
                    
                 </>
            
            )  
        })}
        
     
        
    </motion.div>
  )
}

export default Gallery
