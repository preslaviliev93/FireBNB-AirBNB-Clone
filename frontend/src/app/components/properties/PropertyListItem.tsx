import React from 'react'
import Image from 'next/image'



export default function PropertyListItem() {
  return (
    <div className='cursor-pointer'>
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          fill
          src="/properties/1.png"
          alt="Luxury Villa"  
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          sizes = "(max-width: 689px) 768px, (max-width: 1200px): 768px, 768px  "
        />
      </div>
      <div className="mt-2">
        <p className="text-lg font-bold text-gray-800">Property Name</p>
      </div>
      <div className="mt-w">
        <p className="text-sm text-gray-600"><strong>$200</strong> per night</p>
      </div>
    </div>
  )
}
