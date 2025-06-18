import React from 'react'
import PropertyList from '@/app/components/properties/PropertyList'

export default function MyPropertiesPage() {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
            <h1 className="mt-6 mb-2 text-2xl">My properties</h1>
            <div className="col-span-1 sm:col-span-2 md:col-span-3 pl-0 md:pl-6">
                <PropertyList />            
            </div>
    </main>
  )
}
