import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import SearchFilters from './SearchFilters'
import Usernav from './Usernav'
import AddPropertyButton from './AddPropertyButton'

export default function Navbar() {
  return (
    <nav className="border-b border-b-gray-300 shadow-sm bg-white py-6 absolute top-0 left-0 z-10 w-full">
        <div className="max-w-[1500px] mx-auto px-6">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-airbnb flex items-center text-xl font-semibold">
                <Image
                  src="/logo.png"
                  alt="Airbnb Logo"
                  width={55}
                  height={28}

                  />
                <span className="hidden lg:block">firebnb</span>
              </Link>

              <div className="flex space-x-8">
                <SearchFilters />
              </div>


              <div className='flex items-center space-x-8'>
                <AddPropertyButton />
                <Usernav />
              </div>
            </div>
        </div>
    </nav>
  )
}
