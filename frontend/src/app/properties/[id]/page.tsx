import React from 'react'
import Image from 'next/image'
import ReservationSidebar from '@/app/components/properties/ReservationSidebar'

export default function PropertyDetailPage() {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
        <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
            <Image
                fill
                src="/properties/1.png"
                alt="Luxury Villa"
                className="object-cover w-full h-full"
                sizes="(max-width: 689px) 768px, (max-width: 1200px): 768px, 768px"
            />
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="col-span-3 py-6 pr-6">
                <h1 className="mb-4 text-4xl text-gray-800">
                    Luxorious Villa in the Heart of the City
                </h1>

                <span className="mb-6 block text-lg text-gray-600">
                    Guests: <strong>4</strong> | Bedrooms: <strong>2</strong> | Bathrooms: <strong>2</strong>
                </span>

                <hr />

                <div className="py-6 flex items-center space-x-4">
                    <Image
                        src="/landlord.png"
                        alt="Landlord"
                        width={64}
                        height={64}
                        className="rounded-full"
                    />

                    <p className="">
                        <strong className="text-gray-800">John Doe</strong> is a superhost with over 10 years of experience in the hospitality industry. He is known for his exceptional service and attention to detail, ensuring that every guest has a memorable stay.
                    </p>

                </div>
                <hr />

                <p className="mt-6 text-lg text-gray-800">
                    Welcome to our luxurious villa located in the heart of the city. This stunning property features modern amenities, spacious living areas, and breathtaking views. Whether you're here for business or pleasure, our villa provides the perfect retreat for relaxation and comfort.
                </p>
            </div>

            <div className='col-span-2 py-6 pr-6'>
                <ReservationSidebar />
            </div>
        </div>        
    </main>
  )
}
