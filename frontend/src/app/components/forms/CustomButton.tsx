
import React from 'react'
interface CustomButtonProps {
    label: string;
    onClick?: () => void;
    className?: string;
}


export default function CustomButton({ 
    label, 
    onClick,
    className 
}: CustomButtonProps) {
  return (
    <div
        onClick={onClick} 
        className={`flex items-center justify-center px-4 py-2 bg-airbnb bg-airbnb-hover text-white rounded-lg cursor-pointer transition-colors ${className}`}>
            {label}
    </div>
  )
}
