import { FaItchIo, FaGithub, FaLinkedin } from "react-icons/fa6";
import { PiReadCvLogoBold } from "react-icons/pi";

export default function Portfoli() {
  return (
    <div className='col-span-1 flex flex-col h-[80%] bg-white mt-5 justify-center self-center'>
        <h1 className='text-2xl px-4'>Links & Profiles</h1>
        <ul className="flex flex-col sm:flex-row justify-center gap-3 items-center">
            <li className='text-lg my-2 hover:underline'><a href="https://github.com/DustyCs" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a></li>
            <li className='text-lg my-2 hover:underline'><a href="https://www.linkedin.com/in/dustyhanscs/" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a></li>
            <li className='text-lg my-2 hover:underline'><a href="https://dustyhanscs.itch.io/" target="_blank" rel="noreferrer"><FaItchIo /> Itch.io</a></li>
            <li className='text-lg my-2 hover:underline'><a href="https://dustyhanscs.itch.io/" target="_blank" rel="noreferrer"><PiReadCvLogoBold /> Resume</a></li>
        </ul>
    </div>
  )
}
