'use client'
import React from 'react'
import Modal from './Modal'
import { useState } from 'react'
import useLoginModal from '@/app/hooks/useLoginModal'
import CustomButton from '../forms/CustomButton'


export default function LoginModal() {
  const loginModal = useLoginModal();
  const content = () => (
    <>
        <h2 className="mb-6 text-2xl">
            Welcome to FireBNB, please login to continue.
        </h2>
        <form action="" className="">
            <input placeholder='Your E-mail address' type="email" className="w-full h-[54px] p-4 border border-gray-200 rounded-xl focus:outline-gray-300 text-gray-800" />
            <input placeholder="****************" type="password" className="w-full h-[54px] p-4 border border-gray-200 rounded-xl focus:outline-gray-300 text-gray-800 mt-4" />
            
            <div className="p-5 bg-airbnb text-white rounded-xl opacity-70 mt-5">
                Error: Invalid email or password.
            </div>
            
            <CustomButton
                label="Login"
                onClick={() => console.log('Login clicked')}
                className="w-full mt-6 bg-airbnb-hover py-4 "
            />
        </form>
    </>
  )



  return (
    <Modal 
      label="Login"
      content={content()}
      isOpen={loginModal.isOpen}
      close={loginModal.close}
    />
  )
}
