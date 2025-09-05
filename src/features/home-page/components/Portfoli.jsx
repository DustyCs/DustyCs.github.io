import { FaItchIo, FaGithub, FaLinkedin } from "react-icons/fa6";
import { PiReadCvLogoBold } from "react-icons/pi";

export default function Portfoli() {
  return (
    <div className='col-span-1 flex flex-col h-[80%] bg-white mt-5 self-center'>
        <h1 className='text-4xl self-center font-bold'>Links & Profiles</h1>
        <ul className="flex flex-col sm:flex-row justify-around items-center my-auto">
            <li className='text-lg my-2 hover:underline flex flex-col items-center'>
              <a href="https://github.com/DustyCs" className="text-8xl text-rose-700" target="_blank" rel="noreferrer"><FaGithub /></a>
              <p className="text-2xl font-bold">GitHub</p>
            </li>
            <li className='text-lg my-2 hover:underline flex flex-col items-center'>
              <a href="https://www.linkedin.com/in/dustyhanscs/" className="text-8xl text-rose-700" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <p className="text-2xl font-bold">LinkedIn</p>
            </li>
            <li className='text-lg my-2 hover:underline flex flex-col items-center'>
              <a href="https://dustyhanscs.itch.io/" className="text-8xl text-rose-700" target="_blank" rel="noreferrer"><FaItchIo /></a>
              <p className="text-2xl font-bold">Itch.io</p>
            </li>
            <li className='text-lg my-2 hover:underline flex flex-col items-center'>
              <a href="https://dustyhanscs.itch.io/" className="text-8xl text-rose-700" target="_blank" rel="noreferrer"><PiReadCvLogoBold /></a>
              <p className="text-2xl font-bold">CV</p>
            </li>
        </ul>
    </div>
  )
}
