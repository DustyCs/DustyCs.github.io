import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function ResponsiveSearch() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex items-center border border-gray-400 rounded-md px-2 py-1 relative w-full max-w-xl">
      <IoSearchOutline
        className="text-2xl cursor-pointer"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      />
      <div
        className={`sm:flex ${
          isMobileOpen ? "flex" : "hidden"
        } flex-1 items-center space-x-2 ml-2`}
      >
        
        <select className="bg-transparent text-xl focus:outline-none border-r pr-2 cursor-pointer">
          <option value="all">All</option>
          <option value="games">Games</option>
          <option value="posts">Posts</option>
          <option value="projects">Projects</option>
          <option value="contact">Contact</option>
          <option value="license">License</option>
        </select>

        <input className="flex-1 bg-transparent text-xl focus:outline-none placeholder-gray-500" placeholder="Search..."/>
        <button className="border-1 border-black text-black px-3 py-1 cursor-pointer rounded-md text-xl hover:bg-gray-300 transition sm:hidden md:hidden lg:block">
          Search
        </button>
      </div>
    </div>
  );
}
