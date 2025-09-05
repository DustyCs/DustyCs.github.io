import React from 'react'
import DustyChar from '../../../assets/projects/DustyChar.png'

export default function AboutMe() {
  return (
    <div className='bg-white '>
        <h1 className='text-4xl px-4'>DustyHansCS</h1>
        <div className='flex items-end gap-2'>
          <div className='h-full w-[30%] bg-red-100 flex items-end justify-center'>
            <img src={DustyChar} alt="" />
          </div>
          <div className='w-[70%] flex justify-around gap-5'>
            <div className='w-1/3'>
              <div className='h-[10rem] w-[10rem] bg-blue-200'>
              <img src={DustyChar} alt="" />
              </div>
              <p>Currently pursuing a degree in Computer Science</p>
            </div>
            <div className='w-1/3'>
              <div className='h-[10rem] w-[10rem] bg-blue-200'>
                <img src={DustyChar} alt="" />
              </div>
              <p>Experienced in web development and game development</p>
            </div>
            <div className='w-1/3'> 
              <div className='h-[10rem] w-[10rem] bg-blue-200'>
                <img src={DustyChar} alt="" />
              </div>
              <p>Passionate about creating engaging and interactive experiences</p>
            </div>
          </div>
        </div>
    </div>
  )
}
