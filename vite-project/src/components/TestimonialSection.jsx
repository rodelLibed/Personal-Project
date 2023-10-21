import { motion } from "framer-motion"


const cards = [
    {
        img: 'https://framerusercontent.com/images/Du4Gx6MPqdAq0Ub9Di7nLHn20.jpg?scale-down-to=512',
        name: 'Sarah T.',
        email: '@sarahtdesigns',
        testimonials: 'I am blown away by the amazing work that Norwood Interiors has done for my home! They were able to transform my space into something truly beautiful and functional. Thank you so much!'
    },
    {
        img: 'https://framerusercontent.com/images/TtMexkfPKx7Sza0aMISi46jY.jpg?scale-down-to=512',
        name: 'Emily G.',
        email: '@mccoy',
        testimonials: 'I had a wonderful experience working with Norwood Interiors. They really took the time to understand my style and preferences, and the end result was a space that felt truly personalized.'
    },
    {
        img: 'https://framerusercontent.com/images/SFiDIf9pQ59Tu8QKOD1AvUpaY.jpg?scale-down-to=512',
        name: 'Alex M.',
        email: '@alexmurphy',
        testimonials: 'I am so impressed with the work that Norwood Interiors did for my office. They were able to create a space that was both functional and beautiful, and it has made such a difference in the way that we work.'
    },
    {
        img: 'https://framerusercontent.com/images/qYNqjM6fHlfWrJEr3wfhmzI.jpg?scale-down-to=512',
        name: 'Lisa S.',
        email: '@lisaso',
        testimonials: 'I cannot recommend Norwood Interiors enough! Their attention to detail and commitment to excellence is truly unmatched. I am so happy with the results.'
    },
    {
        img: 'https://framerusercontent.com/images/G2SDtX02LrTZ0CvMgcT9BQtGk.jpg?scale-down-to=512',
        name: 'Michael P.',
        email: '@@mpinteriors',
        testimonials: 'Working with this company was such a pleasure! They were able to capture my vision perfectly and create a space that I love coming home to every day.'
    },
    {
        img: 'https://framerusercontent.com/images/SCLaExdmiXrn32AxMUnFpE5KBE.jpg?scale-down-to=512',
        name: 'Jack D.',
        email: '@jackdesigns',
        testimonials: 'From start to finish, Norwood Interiors exceeded my expectations. Their team was professional, talented, and a joy to work with. I couldnt be happier with my new space!'
    },

]

const ContentSection2 = () => {
    
  return (
    <div className="mt-10 h-full w-full">
        <div className="py-5 px-10 w-[450px] md:w-[930px]">
            <h1 className="text-6xl md:text-9xl font-medium">What our <br />clients say</h1>
            <p className="text-[15px] md:text-lg font-extralight mt-10">Discover how our clients have benefited from partnering with us and achieving their  goals. 
                Read their testimonials and see for yourself the impact of working with our team.
            </p>
        </div>

        <div className="grid justify-items-center px-10 md:grid-cols-3 gap-5 mt-3" >
            {cards.map((card)=>{
                return(
                    <>
                    
                        <div
                         key={card.id} className=" flex flex-col py-10 px-7 mt-3 md:h-[350px] cursor-pointer lg:h-[250px]  outline  rounded-xl" >
                              <div className="flex gap-2">
                                <img className="h-[50px] w-[50px] object-cover rounded-full" src={card.img} alt="" />
                                <div className="flex flex-col">
                                <h3 className="  font-medium">{card.name}</h3>
                                <span className="text-xs font-light">{card.email}</span>
                                </div>
                              </div>
                            
                           
                           <p className="mt-4 font-extralight">{card.testimonials}</p>
                 
                        </div>
                    </>
                      
                    
                )
            })}
        </div>
    </div>
  )
}

export default ContentSection2
