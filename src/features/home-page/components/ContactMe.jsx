import React from 'react'
import DustyChar from '../../../assets/projects/DustyChar.png'
import { motion } from 'framer-motion'

export default function ContactMe() {
  return (
    <div className='col-span-1 flex justify-center'>
      <div className='flex w-[70%] justify-between bg-white gap-10'>
        <div className='w-[40%] p-4'>
          <h1 className='text-2xl font-bold px-4'>CONTACT</h1>
          <p className='text-gray-500'>If you have any questions or concerns, please don't hesitate to contact me.</p>
          <p className='text-gray-500'>I look forward to hearing from you!</p>
          <p className='text-gray-700'>johannesgarciajustin@gmail.com</p>
          <button className='mt-5 px-4 py-2 bg-red-300 rounded-lg hover:bg-red-400 transition'>
            <a href="mailto:n3s8w@example.com" className='text-lg hover:underline'>Email</a>
          </button>
        </div>
        <div className='h-[15rem] w-[15rem] relative bg-gray-100 shadow-2xl m-auto shadow-red-300 rounded-full self-center'>
          <motion.img src={DustyChar} className='absolute bottom-0 left-[50%] -rotate-4 translate-x-[-50%] h-[18rem] object-cover' alt="" 
            whileHover={{ rotate: 4 }}
            initial={{ rotate: 0 }}
            animate={{ rotate: -8 }}
            transition={{ type: "spring", stiffness: 300, repeat: Infinity, repeatType: "reverse", duration: 2 }}
          />
        </div>
      </div>
    </div>
  )
}
