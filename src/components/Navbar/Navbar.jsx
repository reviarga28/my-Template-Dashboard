import React from 'react'
import { Menu, MoonIcon, SunDimIcon } from 'lucide-react'

const Navbar = ({ isDarkMode, toggleDarkMode, toggleSidebar }) => {
  return (
    <nav className={`
      flex justify-between 
      items-center 
      p-4.5
      bg-white 
      dark:bg-gray-800 
      shadow-sm
      sticky top-0 z-10
    `}>
      <div className="flex items-center">
        <button 
          onClick={toggleSidebar}
          className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 mr-3"
          aria-label="Toggle sidebar"
        >
          <Menu className="w-5 h-5 dark:text-white" />
        </button>
        <h1 className="text-xl font-semibold dark:text-white">Dashboard</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        {/* Switch untuk Dark Mode */}
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer" 
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
          <div className="
            w-11 h-6 
            bg-gray-200 
            peer-focus:outline-none 
            rounded-full 
            peer 
            dark:bg-gray-700 
            peer-checked:after:translate-x-full 
            peer-checked:after:border-white 
            after:content-[''] 
            after:absolute 
            after:top-[2px] 
            after:left-[2px] 
            after:bg-white 
            after:border-gray-300 
            after:border 
            after:rounded-full 
            after:h-5 
            after:w-5 
            after:transition-all 
            dark:border-gray-600 
            peer-checked:bg-gray-600
          "></div>
          <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            {isDarkMode ? <SunDimIcon/> : <MoonIcon/>}
          </span>
        </label>
        
        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-xs font-medium dark:text-white">
          R
        </div>
      </div>
    </nav>
  )
}

export default Navbar