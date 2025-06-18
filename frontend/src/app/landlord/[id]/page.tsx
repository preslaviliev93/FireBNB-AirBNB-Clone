import React from 'react'
import Image from 'next/image'
import ContactButton from '@/app/components/ContactButton'
import PropertyList from '@/app/components/properties/PropertyList'

export default function Landlord() {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
        <div className="w-full  mb-4 overflow-y-auto rounded-xl relative scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <aside className="col-span-1 mb-4">
                <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
                  <Image
                    src="/landlord.png"
                    alt="Landlord"
                    width={200}
                    height={200}
                    className="rounded-full"
                  />
                  <h1 className="mt-6 text-2xl">Sam Smith</h1>

                  <ContactButton />
                </div>  
                
              </aside>
              <div className="col-span-1 sm:col-span-2 md:col-span-3 pl-0 md:pl-6">
                  <PropertyList />  
                
              </div>
            </div>
        </div>
    </main>
  )
}   

