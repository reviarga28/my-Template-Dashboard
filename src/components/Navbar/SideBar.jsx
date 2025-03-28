import React, { useState } from 'react'
import { Home, Users, Settings, ChevronLeft, ChevronRight, LogOut, User, ChevronDown, ChevronUp, ClipboardList, Scan } from 'lucide-react'

const SideBar = ({ isOpen, toggleSidebar }) => {
  const [openSettings, setOpenSettings] = useState(false)
  const [openClients, setOpenClients] = useState(false)

  const menuItems = [
    { icon: Home, label: 'Beranda' },
    { icon: Scan, label: 'Scan' },
    { 
      icon: Users, 
      label: 'Clients',
      dropdown: [
        { icon: ClipboardList, label: 'Detail Clients' }
      ]
    },
    { 
      icon: Settings, 
      label: 'Pengaturan',
      dropdown: [
        { icon: User, label: 'Account' },
        { icon: LogOut, label: 'Logout' }
      ]
    }
  ]

  const toggleDropdown = (menu) => {
    if (menu === 'pengaturan') {
      setOpenSettings(!openSettings)
      setOpenClients(false)
    } else if (menu === 'clients') {
      setOpenClients(!openClients)
      setOpenSettings(false)
    }
  }

  return (
    <div className={`h-screen flex flex-col ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300 bg-white dark:bg-gray-800`}>
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
      
      <nav className="flex-1 mt-2 overflow-y-auto">
        {menuItems.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => item.dropdown && toggleDropdown(item.label.toLowerCase())}
              className={`
                flex items-center 
                w-full
                p-3 
                hover:bg-gray-200 
                dark:hover:bg-gray-700 
                transition-colors
                ${isOpen ? 'justify-between' : 'justify-center'}
                rounded-md
                mx-1
                my-1
              `}
            >
              <div className="flex items-center">
                <item.icon className="w-5 h-5 dark:text-white" />
                {isOpen && <span className="ml-3 dark:text-white text-sm">{item.label}</span>}
              </div>
              {isOpen && item.dropdown && (
                item.label === 'Pengaturan' && openSettings ? (
                  <ChevronUp className="w-4 h-4 dark:text-white" />
                ) : item.label === 'Clients' && openClients ? (
                  <ChevronUp className="w-4 h-4 dark:text-white" />
                ) : item.dropdown ? (
                  <ChevronDown className="w-4 h-4 dark:text-white" />
                ) : null
              )}
            </button>

            {/* Dropdown untuk Pengaturan */}
            {isOpen && item.label === 'Pengaturan' && openSettings && (
              <div className="ml-8">
                {item.dropdown.map((subItem, subIndex) => (
                  <button
                    key={subIndex}
                    className={`
                      flex items-center 
                      w-full
                      p-2 
                      hover:bg-gray-200 
                      dark:hover:bg-gray-700 
                      transition-colors
                      rounded-md
                      text-sm
                    `}
                  >
                    <subItem.icon className="w-4 h-4 dark:text-white" />
                    <span className="ml-3 dark:text-white">{subItem.label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Dropdown untuk Clients */}
            {isOpen && item.label === 'Clients' && openClients && (
              <div className="ml-8">
                {item.dropdown.map((subItem, subIndex) => (
                  <button
                    key={subIndex}
                    className={`
                      flex items-center 
                      w-full
                      p-2 
                      hover:bg-gray-200 
                      dark:hover:bg-gray-700 
                      transition-colors
                      rounded-md
                      text-sm
                    `}
                  >
                    <subItem.icon className="w-4 h-4 dark:text-white" />
                    <span className="ml-3 dark:text-white">{subItem.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}

export default SideBar