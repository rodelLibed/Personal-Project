import {CiTwitter} from 'react-icons/ci'
import {PiInstagramLogoLight, PiYoutubeLogoThin} from 'react-icons/pi'

const Footer = () => {
  return (
    <div className='flex flex-col gap-2 px-10 mt-20'>
      <a className="font-bold text-[40px] cursor-pointer">NORWOOD</a>
      <div className="flex gap-5 text-base font-extralight">
        <span >Made by Royden.</span>
         <span>Powered by Framer.</span>
         <span> © 2023 Royden. All Rights Reserved.</span>
      </div>
      <p className='text-base font-extralight'>
        Norwood Interiors  |  Interior Designer  |  New York, USA <br />
        40 West 25th Street, New York, NY 10010 <br />
        000-000-0000  |  info@norwoodinteriors.com
    </p>
    <div className='flex  text-center gap-5 mt-5'>
        <button className='border-[1px] border-black rounded-full p-2 '><CiTwitter/></button>
        <button className='  border-[1px] border-black rounded-full p-2'><PiInstagramLogoLight/></button>
        <button  className='  border-[1px] border-black rounded-full p-2'><PiYoutubeLogoThin /></button>
    </div>
    <div className='py-5'></div>

    </div>
  )
}

export default Footer
