'use client'
import React from 'react'
import CustomButton from '@/app/components/forms/CustomButton'


export default function ConversationDetail() {
  return (
    <>
        <div className="max-h-[400px] overflow-auto flex flex-col space-y-4 scrollbar-thin">
            <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
                <p className="font-bold text-gray-800">John Doe</p>
                <p className="">How can I help you?</p>
            </div>

            <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-200">
                <p className="font-bold text-gray-800">Jane Smith</p>
                <p className="">Do you accept check ins after 12PM?</p>
            </div>
        </div>

        <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
            <input 
                type="text"
                placeholder="Type your message here..."
                className="w-full p-4 bg-gray-200 rounded-xl focus:outline-1 focus:outline-gray-300 text-gray-800"
            />
            <CustomButton
                label="Send"
                onClick = {() => console.log('Message sent')}
                className="w-[100px]"
            />
        </div>
    </>
  )
}
