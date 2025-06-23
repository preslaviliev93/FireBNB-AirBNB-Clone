'use client'
import React from 'react'
import Modal from './Modal'
import { useState } from 'react'
import useSignupModal from '@/app/hooks/useSignupModal'
import CustomButton from '../forms/CustomButton'


export default function SignupModal() {
  const signupModal = useSignupModal();
  const content = () => (
    <>
        <h2 className="mb-6 text-2xl">
            Welcome to FireBNB, please sign up to book a property.
        </h2>
        <form action="" className="">
            <input placeholder='Your E-mail address' type="email" className="w-full h-[54px] p-4 border border-gray-200 rounded-xl focus:outline-gray-300 text-gray-800" />
            <input placeholder="****************" type="password" className="w-full h-[54px] p-4 border border-gray-200 rounded-xl focus:outline-gray-300 text-gray-800 mt-4" />
            
            <div className="p-5 bg-airbnb text-white rounded-xl opacity-70 mt-5">
                Error: Invalid email or password.
            </div>
            
            <CustomButton
                label="Sign Up"
                onClick={() => console.log('Login clicked')}
                className="w-full mt-6 bg-airbnb-hover py-4 "
            />
        </form>
    </>
  )



  return (
    <Modal 
      label="Sign Up"
      content={content()}
      isOpen={signupModal.isOpen}
      close={signupModal.close}
    />
  )
}
