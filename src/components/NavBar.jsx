import { IoSearchOutline } from "react-icons/io5"
import ResponsiveSearch from "./SearchBar"

export default function NavBar() {
  return (
     <div className="w-full lg:h-16 bg-gray-100 shadow-xl text-black p-4 flex items-center">
        <div className="relative w-[20%]">
            <h1 className="text-4xl cursor-pointer">DustyCS</h1>
            <p className="absolute -bottom-4 left-7 text-sm pl-5">dustyhanscs</p>
        </div>
        <nav className="w-[40%] flex justify-center">
            <ul className="flex sm:flex-col lg:flex-row space-x-6">
                <li className="text-3xl font-bold"><a href="">Home</a></li>
                <li className="text-3xl font-bold"><a href="">Projects</a></li>
                <li className="text-3xl font-bold"><a href="">Games</a></li>
                <li className="text-3xl font-bold"><a href="">License</a></li>
            </ul>
        </nav>
        {/* Search Bar */}
        <div className="h-[3rem] w-[40%] flex justify-center">
          <ResponsiveSearch />
        </div>
    </div>
  )
}
