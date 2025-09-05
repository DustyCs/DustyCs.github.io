import React from 'react'
import DustyChar from '../../../assets/projects/DustyChar.png'

export default function AboutMe() {
  return (
    <div className='bg-white '>
        <h1 className='text-4xl px-4'>DustyHansCS</h1>
        <div className='flex items-center justify-around'>
          <div className='h-full w-[20%] bg-red-100'>
            <img src={DustyChar} alt="" />
          </div>
          <div className='w-[60%] flex justify-around py-5 gap-5'>
            <div className='w-1/3'>
              <div className='h-[10rem] w-[10rem] bg-blue-200'>
              <img src={DustyChar} alt="" />
              </div>
              <p className='text-gray-700 font-semibold'>Currently pursuing a degree in Computer Science</p>
            </div>
            <div className='w-1/3'>
              <div className='h-[10rem] w-[10rem] bg-blue-200'>
                <img src={DustyChar} alt="" />
              </div>
              <p className='text-gray-700 font-semibold'>Experienced in web development and game development</p>
            </div>
            <div className='w-1/3'> 
              <div className='h-[10rem] w-[10rem] bg-blue-200'>
                <img src={DustyChar} alt="" />
              </div>
              <p className='text-gray-700 font-semibold'>Passionate about creating engaging and interactive experiences</p>
            </div>
          </div>
        </div>
    </div>
  )
}
