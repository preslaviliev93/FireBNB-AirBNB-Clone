'use client';
import React from 'react'
interface ModalProps {
    label: string;
    content: React.ReactElement;
    isOpen: boolean;
    close: () => void;
}
import {X} from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';


export default function Modal({ label, content, isOpen, close }: ModalProps) {

  const [showModal, setShowModal] = useState(isOpen); 

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen])

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
        close();
    }, 300)   
    }, [close])

  if (!isOpen) {
    return null;
  }

  return (
    <div className="flex items-center justify-center fixed inset-0 z-40 bg-black/60">
        <div className="relative w-[90%] md:w-[80%] lg:w-[700px] my-6 mx-auto h-auto">
            <div className={`translate duration-600 h-full translate-y-0 opacity-100 ${showModal ? 'translate-y-0 opacity-100': 'translate-y-full opacity-0'}`}>
                <div className="w-full h-auto rounded-xl relative flex flex-col bg-white">
                    <header className="relative flex items-center justify-center p-6 border-b border-b-gray-300 rounded-t">
                        <h2 className="text-lg font-bold">{label}</h2>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-200 rounded-full cursor-pointer">
                            <X onClick={() => {}}className="text-airbnb" size={20} />
                        </div>
                    </header>

                    <section className="p-6">
                        {content}
                    </section>

                </div>
            </div>
        </div>
    </div>
  )
}
