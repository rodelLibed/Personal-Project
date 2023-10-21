
//Framer Motion
import {motion} from 'framer-motion'

//Component Pages
import Header from './components/Header'
import {HeroSection} from './components/HeroSection'
import ContentSection from './components/ContentSection'
import Gallery from './components/Gallery'
import TestimonialSection from './components/TestimonialSection'
import Banner from './components/Banner'
import ContentSection2 from './components/ContentSection2'
import Footer from './components/Footer'
import Maps from './components/Maps'

/*     <Header  />
       <HeroSection />
       <ContentSection/>
       <Gallery />
       <TestimonialSection />
       <Banner />
       <ContentSection2 />
       <Footer />*/

const App = () => {
 

  return (
    <motion.div 
    initial={{ opacity:0 }}  
    animate={{ opacity: 1}} 
    transition={{ duration: 1.5 }}
     className='bg-white'>
       <Header  />
       <HeroSection />
       <ContentSection/>
       <Gallery />
       <TestimonialSection />
       <Banner />
       <ContentSection2 />
       <Footer />

    </motion.div>
  )
}

export default App
