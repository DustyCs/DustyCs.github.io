import React from 'react'
import DustyChar from '../../../assets/projects/DustyChar.png'

export default function AboutMe() {
  return (
    <div className="bg-white">
      <h1 className="text-4xl px-4 mb-6">DustyHansCS</h1>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-around gap-6 px-4">
        <div className="w-full bg-red-100 md:w-1/4 flex justify-center md:justify-start">
          <img src={DustyChar} alt="" className="max-h-60 object-contain" />
        </div>
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="h-40 w-40 bg-blue-200 flex items-center justify-center rounded-lg overflow-hidden">
              <img src={DustyChar} alt="" className="h-full object-contain" />
            </div>
            <p className="text-gray-700 font-semibold mt-2">
              Currently pursuing a degree in Computer Science
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="h-40 w-40 bg-blue-200 flex items-center justify-center rounded-lg overflow-hidden">
              <img src={DustyChar} alt="" className="h-full object-contain" />
            </div>
            <p className="text-gray-700 font-semibold mt-2">
              Experienced in web development and game development
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="h-40 w-40 bg-blue-200 flex items-center justify-center rounded-lg overflow-hidden">
              <img src={DustyChar} alt="" className="h-full object-contain" />
            </div>
            <p className="text-gray-700 font-semibold mt-2">
              Passionate about creating engaging and interactive experiences
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}
