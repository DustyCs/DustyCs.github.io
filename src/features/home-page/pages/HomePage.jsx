import ComponentSlider from '../components/SlideShow'
import RPSOnline from '../../../assets/projects/RPSOnline.png'
import IntroductionBG from '../../../assets/projects/SliderBG2.png'
import DustyCS from '../../../assets/projects/DustyChar.png'

import ProjectLatest from "../../../assets/projects/GameLatest.png"
import GameLatest from "../../../assets/projects/Slimes Hometown.png"

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import LatestRelease from '../components/LatestRelease'
import LicenseToUse from '../components/LicenseToUse'

function Introduction() {
  return ( // just testing for now adding responsiveness
    <div className="flex grow-0 overflow-hidden border sm:h-[20rem] relative pointer-events-none
                    flex-col items-center sm:items-start sm:flex-row">
      <div className="text-2xl w-[100%] sm:w-[35%] flex px-4 z-10 flex-col">
        <div className='text-4xl font-extrabold'>DustyHansCS</div>
        <div>
          <p className="text-md">Personal Site</p>
          <p>I'm a developer</p>
        </div>
      </div>
      <div className="relative w-[65%] sm:h-full overflow-hidden">
        <img
          src={IntroductionBG}
          alt="Online RPS Site"
          className="w-screen sm:h-[19.9rem] object-bottom shadow-2xl"
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

// refactor this 2

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
          className="w-screen h-[19.9rem] object-bottom shadow-2xl"
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
                className="w-screen h-[19.9rem] object-bottom shadow-2xl"
                />
            </div>
        </div>
    )
}

export default function HomePage() {
  return (
    <div className='h-full'>
        <ComponentSlider slides={[Introduction, LatestProject, LatestGame]}/>
        <div className='w-[95vw] m-auto grid grid-cols-2 bg-gray-50'>
            <div className='w-full col-span-1'>
              <h1 className='text-2xl px-4'>GitHub Contributions <span className='text-xs'>some commits are missing</span></h1>
              <img onClick={() => window.open("https://github.com/DustyCs")} src="https://ghchart.rshah.org/DustyCs" alt="GitHub Contributions Chart" />
            </div>
            <LatestRelease />
            <LicenseToUse/>
        </div>
    </div>
  )
}
