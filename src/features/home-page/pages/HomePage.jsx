import ComponentSlider from '../components/SlideShow'
import RPSOnline from '../../../assets/projects/RPSOnline.png'
import IntroductionBG from '../../../assets/projects/SliderBG.png'
import DustyCS from '../../../assets/projects/DustyChar.png'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

// Refactor this
function Introduction(){
    return (
        <div className='flex grow-0 justify-between overflow-hidden h-[20rem]'>
            <div className='text-2xl w-[35%]'>Introduction</div>
            <div className='relative w-[65%] overflow-hidden'>
              <motion.div className='absolute bottom-27 right-0'
                animate={{ y: [0, 0, -18, -15, 73, 35, 50, 50], 
                        x: [0, -160, -300, -470, -580, -930, -940, -1100],
                        rotate: [20, -10, -5, -5, 5, -10, -10, 20] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                >
                    <img src={DustyCS} alt="" className='' />
              </motion.div>
              <img src={IntroductionBG} alt="Online RPS Site" className='h-[21rem] w-full' /> 
            </div>
        </div>
    )
}

function LatestProject(){
    return (
        <div>Latest Project</div>
    )
}

function LatestGame(){
    return (
        <div>Latest Game</div>
    )
}

export default function HomePage() {
  return (
    <div className='h-full'>
        <ComponentSlider slides={[Introduction, LatestProject, LatestGame]}/>
        <div className='w-full '>

        </div>
    </div>
  )
}
