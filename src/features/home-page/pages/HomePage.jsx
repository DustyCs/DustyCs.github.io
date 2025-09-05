import ComponentSlider from '../components/SlideShow'
import IntroductionBG from '../../../assets/projects/SliderBG2.png'
import DustyCS from '../../../assets/projects/DustyChar.png'

import Portfoli from '../components/Portfoli'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'
import Blog from '../components/Blog'

import ProjectLatest from "../../../assets/projects/GameLatest.png"
import GameLatest from "../../../assets/projects/Slimes Hometown.png"

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import LatestRelease from '../components/LatestRelease'
import LicenseToUse from '../components/LicenseToUse'

function Introduction() {
  return ( 
    <div className="flex grow-0 overflow-hidden sm:h-[100%] relative pointer-events-none
                    flex-col items-center sm:items-start sm:flex-row">
      <div className="text-2xl w-[100%] sm:w-[35%] flex px-4 z-10 flex-col">
        <div className='text-4xl font-extrabold'>DustyHansCS</div>
        <div className='px-1 flex-wrap'>
          <p className="text-md">Personal Site</p>
          <p>An undergraduate in Computer Science</p>
          <p>with multiple projects and games developed under my belt</p>
          <p>and an interest in furthering my knowledge and skillset</p>
          <br className='md:hidden 2xl:block' />
          <p>I am currently looking for internships</p>
          <p>use the contact form below if you are interested in working with me</p>
        </div>
      </div>
      <div className="relative sm:w-[65%] sm:h-full overflow-hidden">
        <div className='absolute bottom-0 right-[50%] translate-x-1/2 animate-bounce transition'>
          <img src={DustyCS} alt="" className='h-[8rem] sm:h-[17rem] md:h-[20rem]' />
          <div className='text-2xl font-extrabold text-white absolute -bottom-6 right-[50%] translate-x-1/2'>DustyHans</div>
        </div>
        <img
          src={IntroductionBG}
          alt="Online RPS Site"
          className="w-screen h-[15rem] sm:h-[19.9rem] object-bottom p-4"
        />
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
          className="w-screen h-[19.9rem] object-bottom p-4"
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
                className="w-screen h-[19.9rem] object-bottom p-4"
                />
            </div>
        </div>
    )
}

export default function HomePage() {
  return (
    <div className='h-full'>
        <ComponentSlider slides={[Introduction, LatestProject, LatestGame]}/>
        <div className='w-[100%] m-auto bg-gray-100 gap-5'>
          <div className='sm:w-[95vw] m-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] sm:gap-2'>
            <LatestRelease />
            <Portfoli />
          </div>
          <div className='w-[98vw] m-auto grid mt-5 grid-cols-1 md:grid-cols-2 items-start gap-2'>
            <AboutMe/>
            <ContactMe/>
          </div>
          <div className='w-[95vw] m-auto mt-5 mb-5'>
            <Blog/>
          </div>
        </div>
    </div>
  )
}
