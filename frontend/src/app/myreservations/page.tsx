import React from 'react'
import Image from 'next/image'
import ContactButton from '@/app/components/ContactButton'
import PropertyList from '@/app/components/properties/PropertyList'

export default function MyReservations() {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
            <h1 className="mt-6 mb-2 text-2xl">My Reservations</h1>
            
            <div className="space-y-4">
              <div className="p-5 mb-6 grid grid-cols-1 sm:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                <div className="col-span-1">
                  <div className="relative overflow-hidden aspect-square rounded-xl">
                    <Image
                      src="/properties/1.png"
                      alt="User"
                      fill
                      className="object-cover hover:scale-110 transition h-full w-full rounded-xl"
                    />
                  </div>
                </div>

                <div className="col-span-1 sm:col-span-3 space-y-2">
                  <h2 className="mb-4 text-xl text-gray-800">
                    Property Name
                  </h2>
                  <p className=""><strong>Check in date</strong> 14/2/2024</p>
                  <p className=""><strong>Check out date</strong> 17/2/2024</p>
                  <p className=""><strong>Number of nights</strong> 2 </p>
                  <p className=""><strong>Number of guests</strong> 2 </p>
                  <p className=""><strong>Total price</strong> $200 </p>                  
                  <div className="cursor-pointer py-4 px-6 bg-airbnb bg-airbnb-hover mt-6 inline-block rounded-xl text-white">Go to property</div>
                </div>
              </div>


              <div className="p-5 mb-6 grid grid-cols-1 sm:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                <div className="col-span-1">
                  <div className="relative overflow-hidden aspect-square rounded-xl">
                    <Image
                      src="/properties/1.png"
                      alt="User"
                      fill
                      className="object-cover hover:scale-110 transition h-full w-full rounded-xl"
                    />
                  </div>
                </div>

                <div className="col-span-1 sm:col-span-3 space-y-2">
                  <h2 className="mb-4 text-xl text-gray-800">
                    Property Name
                  </h2>
                  <p className=""><strong>Check in date</strong> 14/2/2024</p>
                  <p className=""><strong>Check out date</strong> 17/2/2024</p>
                  <p className=""><strong>Number of nights</strong> 2 </p>
                  <p className=""><strong>Number of guests</strong> 2 </p>
                  <p className=""><strong>Total price</strong> $200 </p>                  
                  <div className="cursor-pointer py-4 px-6 bg-airbnb bg-airbnb-hover mt-6 inline-block text-white rounded-xl">Go to property</div>
                </div>
              </div>
            </div>
        
    </main>
  )
}

