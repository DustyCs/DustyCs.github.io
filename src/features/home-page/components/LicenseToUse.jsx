import React from 'react'
import LicensePanel from './LicensePanel'

export default function LicenseToUse() {
  return (
    <div className='w-full col-span-1  bg-gray-100 flex flex-col items-center justify-center'>
      <h1 className='text-4xl px-4'>License To Use</h1>
      <p className=''>
        Majority of my games, projects and assets are licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0). 
      </p>
      <LicensePanel />
    </div>
  )
}
