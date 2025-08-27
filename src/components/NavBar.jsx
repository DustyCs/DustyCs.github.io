import { IoSearchOutline } from "react-icons/io5"
import ResponsiveSearch from "./SearchBar"

export default function NavBar() {
  return (
     <div className="w-full bg-gray-100 shadow-lg text-black p-4 flex items-center flex-col gap-5 md:gap-0 sm:flex-row lg:h-16">
        <div className="relative w-[20%]">
            <h1 className="md:text-4xl text-3xl cursor-pointer">DustyCS</h1>
            <p className="absolute -bottom-4 left-7 text-sm pl-5">dustyhanscs</p>
        </div>
        <nav className="w-[40%] flex justify-center">
            <ul className="flex flex-col lg:flex-row sm:space-x-6">
                <div className="flex space-x-6 lg:flex-row lg:justify-start lg:items-start justify-center items-center">
                  <li className="lg:text-3xl text-xl font-bold"><a href="/">Home</a></li>
                  <li className="lg:text-3xl text-xl font-bold"><a href="/projects">Projects</a></li>{/* I could just create a project repo aswell and host it */}
                </div>
                <div className="flex space-x-6 lg:flex-row justify-center items-center">
                  <li className="lg:text-3xl text-xl font-bold"><a href="/games">Games</a></li>
                  <li className="lg:text-3xl text-xl font-bold"><a href="">License</a></li>
                </div>
            </ul>
        </nav>
        {/* Search Bar */}
        <div className="h-[3rem] w-[40%] flex justify-center">
          <ResponsiveSearch />
        </div>
    </div>
  )
}
