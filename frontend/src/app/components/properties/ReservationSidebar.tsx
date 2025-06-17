import React from 'react'

export default function ReservationSidebar() {
  return (
    <aside className="p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl h-full">
        <h2 className="mb-5 text-2xl text-gray-800">$200 per night</h2>
        <div className="mb-6 p-3 border border-gray-400 rounded-xl">
            <label className="block mb-2 text-gray-700 font-bold">Guests</label>
            <select className="w-full p-2 border border-gray-300 rounded-lg cursor-pointer">
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
            </select>
        </div>
        
        <div className="w-full mb-6 py-6 text-center text-white rounded-xl bg-airbnb bg-airbnb-hover cursor-pointer">Book</div>
        <div className="mb-4 flex justify-between align-center">
            <p className="">$200 * 4 nights</p>
            <p className="">$800</p>
        </div>
        <div className="mb-4 flex justify-between align-center">
            <p className="">Cleaning fee</p>
            <p className="">$50</p>
        </div>
        <hr className="text-gray-200 mb-4" />
        <div className="mb-4 flex justify-between align-center text-bold text-gray-800">
            <p className="">Total</p>
            <p className="">$850</p>
        </div>
    </aside>
  )
}
