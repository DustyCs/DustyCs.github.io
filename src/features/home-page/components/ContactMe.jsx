import React from 'react'
import DustyChar from '../../../assets/projects/DustyChar.png'
import { motion } from 'framer-motion'

export default function ContactMe() {
  return (
    <div className='col-span-1 flex justify-center'>
      <div className='flex w-[60%] bg-white gap-10'>
        <div className='w-[40%]'>
          <h1 className='text-2xl px-4'>CONTACT</h1>
          <p>If you have any questions or concerns, please don't hesitate to contact me.</p>
          <p className='px-4'>You can reach me at:</p>
          <ul className='list-disc px-10'>
            <ol><a href="mailto:5V9lT@example.com" className='text-blue-600 underline'>5V9lT@example.com</a></ol>
          </ul>
        </div>
        <div className='h-[10rem] w-[10rem] relative bg-gray-100 shadow-2xl shadow-red-300 rounded-full'>
          <motion.img src={DustyChar} className='absolute bottom-0 left-[50%] -rotate-4 translate-x-[-50%] h-[12rem] object-cover' alt="" 
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
