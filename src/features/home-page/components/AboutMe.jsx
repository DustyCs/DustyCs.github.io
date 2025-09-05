import React from 'react'
import DustyChar from '../../../assets/projects/DustyChar.png'

export default function AboutMe() {
  return (
    <div className='bg-white'>
        <h1>DUSTYHANSCS</h1>
        <div className='flex gap-2'>
          <div className='h-[15rem] w-[15rem] bg-red-100'>
            <img src={DustyChar} alt="" />
          </div>
          <div className='flex'>
            <div className='h-[10rem] w-[10rem] bg-blue-200'>
              <img src={DustyChar} alt="" />
            </div>
            <div className='h-[10rem] w-[10rem] bg-blue-200'>
                <img src={DustyChar} alt="" />
            </div>
            <div className='h-[10rem] w-[10rem] bg-blue-200'>
                <img src={DustyChar} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}
