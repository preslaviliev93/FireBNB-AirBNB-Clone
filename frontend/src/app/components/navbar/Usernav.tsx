'use client'
import React from 'react'
import { Menu, User } from 'lucide-react'
import { useState } from 'react'
import MenuLink from './MenuLink'


export default function Usernav() {
  const [isOpen, setIsOpen] = useState(false)
  

  return (
    <div className="p-2 relative inline-block border border-gray-300 rounded-full">
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center">
            <Menu className="w-5 h-5 text-gray-600 cursor-pointer" />
            <User className="w-5 h-5 text-gray-600 ml-2 cursor-pointer" />
        </button>

        {isOpen && (
          <div className="w-[220px] absolute top-[60px] right-0 bg-white border border-gray-300 rounded-xl shadow-md flex flex-col cursor-pointer">
            <MenuLink 
              label="Log in"
              onClick={() => console.log('Log in clicked')}
            />
            <MenuLink 
              label="Sign up"
              onClick={() => console.log('Sign up clicked')}
            />
            
          </div>
        )}
    </div>
  )
}
