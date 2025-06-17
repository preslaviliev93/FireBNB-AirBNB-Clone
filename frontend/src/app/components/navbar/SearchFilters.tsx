import React from 'react'
import {Search} from 'lucide-react'

export default function SearchFilters() {
  return (
    <div className="h-[64px] flex flex-row items-center justify-between border border-gray-200 rounded-full">
        <div className="hidden lg:block">
            <div className="cursor-pointer flex flex-row item-center justify-between">
                <div className="w-[250px] h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                  <p className="text-xs font-semibold">Where?</p>
                  <p className="text-sm ">Wanted location</p>
                </div>

                <div className="cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                  <p className="text-xs font-semibold">Check in</p>
                  <p className="text-sm ">Add dates</p>
                </div>

                <div className="cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                  <p className="text-xs font-semibold">Check in</p>
                  <p className="text-sm ">Add dates</p>
                </div>

                <div className="cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                  <p className="text-xs font-semibold">Who</p>
                  <p className="text-sm ">Add guests</p>
                </div>
            </div>
        </div>

        <div className="p-2">
            <div className="p-4 bg-airbnb  bg-airbnb-hover rounded-full text-white cursor-pointer">
                <Search className="w-5 h-5" />
            </div>
        </div>
    </div>
  )
}
