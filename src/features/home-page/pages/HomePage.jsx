import ComponentSlider from '../components/SlideShow'
import RPSOnline from '../../../assets/projects/RPSOnline.png'
import IntroductionBG from '../../../assets/projects/SliderBG2.png'
import DustyCS from '../../../assets/projects/DustyChar.png'

import ProjectLatest from "../../../assets/projects/GameLatest.png"
import GameLatest from "../../../assets/projects/Slimes Hometown.png"

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import LatestRelease from '../components/LatestRelease'

function Introduction() {
  return (
    <div className="flex grow-0 overflow-hidden h-[20rem] relative pointer-events-none">
      <div className="text-2xl w-[35%] flex items-center px-4 z-10">
        Introduction
      </div>
      <div className="relative w-[65%] h-full overflow-hidden">
        <img
          src={IntroductionBG}
          alt="Online RPS Site"
          className="w-screen h-[19.9rem] object-bottom"
        />
        <motion.div
          className="absolute bottom-[1rem] right-0 w-[20%] h-[60%] z-20"
          animate={{
            y: [-35],
            x: ["0vw", "-10vw", "-25vw", "-40vw", "-60vw"],
            rotate: [20, -10, -5, -5, 5, -10, -10, 20],
          }}
          style={{ bottom: '1rem', top: 'auto' }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <img
            src={DustyCS}
            alt=""
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}

function LatestProject(){
    return (
    <div className="flex grow-0 overflow-hidden h-[20rem] relative pointer-events-none">
      <div className="text-2xl w-[35%] flex items-center px-4 z-10">
        Project
      </div>
      <div className="relative w-[65%] h-full overflow-hidden">
        <img
          src={ProjectLatest}
          alt="Online RPS Site"
          className="w-screen h-[19.9rem] object-bottom"
        />
      </div>
    </div>
    )
}

function LatestGame(){
    return (
        <div className="flex grow-0 overflow-hidden h-[20rem] relative pointer-events-none">
            <div className="text-2xl w-[35%] flex items-center px-4 z-10">
                Game
            </div>
            <div className="relative w-[65%] h-full overflow-hidden">
                <img
                src={GameLatest}
                alt="Online RPS Site"
                className="w-screen h-[19.9rem] object-bottom"
                />
            </div>
        </div>
    )
}

export default function HomePage() {
  return (
    <div className='h-full'>
        <ComponentSlider slides={[Introduction, LatestProject, LatestGame]}/>
        <div className='w-full '>
            <LatestRelease />
        </div>
    </div>
  )
}
