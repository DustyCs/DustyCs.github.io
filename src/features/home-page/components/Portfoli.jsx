import { FaItchIo, FaGithub, FaLinkedin } from "react-icons/fa6";
import { PiReadCvLogoBold } from "react-icons/pi";

export default function Portfoli() {
  return (
    <div className='col-span-1 flex flex-col mt-5 sm:h-[80%] bg-white sm:mt-5 self-center'>
      <h1 className='text-4xl self-center font-bold mb-4'>Links & Profiles</h1>
      <ul className="grid grid-cols-2 gap-6 sm:flex sm:flex-row sm:justify-around sm:items-center">
        <li className='text-lg hover:underline flex flex-col items-center'>
          <a href="https://github.com/DustyCs" className="text-6xl sm:text-8xl text-rose-700" target="_blank" rel="noreferrer"><FaGithub /></a>
          <p className="text-xl sm:text-2xl font-bold">GitHub</p>
        </li>
        <li className='text-lg hover:underline flex flex-col items-center'>
          <a href="https://www.linkedin.com/in/dustyhanscs/" className="text-6xl sm:text-8xl text-rose-700" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <p className="text-xl sm:text-2xl font-bold">LinkedIn</p>
        </li>
        <li className='text-lg hover:underline flex flex-col items-center'>
          <a href="https://dustyhanscs.itch.io/" className="text-6xl sm:text-8xl text-rose-700" target="_blank" rel="noreferrer"><FaItchIo /></a>
          <p className="text-xl sm:text-2xl font-bold">Itch.io</p>
        </li>
        <li className='text-lg hover:underline flex flex-col items-center'>
          <a href="https://dustyhanscs.itch.io/" className="text-6xl sm:text-8xl text-rose-700" target="_blank" rel="noreferrer"><PiReadCvLogoBold /></a>
          <p className="text-xl sm:text-2xl font-bold">CV</p>
        </li>
      </ul>
    </div>

  )
}
