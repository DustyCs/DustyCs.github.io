import { IoSearchOutline } from "react-icons/io5"
import ResponsiveSearch from "./SearchBar"

export default function NavBar() {
  return (
     <div className="w-full lg:h-16 bg-gray-100 shadow-lg text-black p-4 flex items-center">
        <div className="relative w-[20%]">
            <h1 className="text-4xl cursor-pointer">DustyCS</h1>
            <p className="absolute -bottom-4 left-7 text-sm pl-5">dustyhanscs</p>
        </div>
        <nav className="w-[40%] flex justify-center">
            <ul className="flex sm:flex-col lg:flex-row space-x-6">
                <div className="flex space-x-6 lg:flex-row md:justify-center md:items-center">
                  <li className="text-3xl font-bold"><a href="">Home</a></li>
                  <li className="text-3xl font-bold"><a href="">Projects</a></li>
                </div>
                <div className="flex space-x-6 lg:flex-row md:justify-center md:items-center">
                  <li className="text-3xl font-bold"><a href="">Games</a></li>
                  <li className="text-3xl font-bold"><a href="">License</a></li>
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
