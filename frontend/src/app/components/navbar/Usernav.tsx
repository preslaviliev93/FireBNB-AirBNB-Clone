import React from 'react'
import { Menu, User } from 'lucide-react'

export default function Usernav() {
  return (
    <div className="p-2 relative inline-block border border-gray-300 rounded-full">
        <button className="flex items-center">
            <Menu className="w-5 h-5 text-gray-600 cursor-pointer" />
            <User className="w-5 h-5 text-gray-600 ml-2 cursor-pointer" />
        </button>
    </div>
  )
}
