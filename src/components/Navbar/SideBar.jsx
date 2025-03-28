import React from 'react'
import { Home, Users, Settings, ChevronLeft, ChevronRight } from 'lucide-react'

const SideBar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { icon: Home, label: 'Beranda' },
    { icon: Users, label: 'Pengguna' },
    { icon: Settings, label: 'Pengaturan' }
  ]

  return (
    <div className={`h-screen flex flex-col ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
      <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
        {isOpen && <h2 className="text-xl font-bold dark:text-white">Logo</h2>}
        <button 
          onClick={toggleSidebar} 
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle sidebar"
        >
          {isOpen ? (
            <ChevronLeft className="w-5 h-5 dark:text-white" />
          ) : (
            <ChevronRight className="w-5 h-5 dark:text-white" />
          )}
        </button>
      </div>
      
      <nav className="flex-1 mt-2">
        {menuItems.map((item, index) => (
          <button
            key={index} 
            className={`
              flex items-center 
              w-full
              p-3 
              hover:bg-gray-200 
              dark:hover:bg-gray-700 
              transition-colors
              ${isOpen ? 'justify-start' : 'justify-center'}
              rounded-md
              mx-1
              my-1
            `}
          >
            <item.icon className="w-5 h-5 dark:text-white" />
            {isOpen && <span className="ml-3 dark:text-white text-sm">{item.label}</span>}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default SideBar