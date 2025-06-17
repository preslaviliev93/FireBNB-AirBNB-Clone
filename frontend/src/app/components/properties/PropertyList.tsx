import React from 'react'
import PropertyListItem from './PropertyListItem'

export default function PropertyList() {
  return (
    <div className="mx-auto p-2 mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <PropertyListItem />
        <PropertyListItem />
        <PropertyListItem />
        <PropertyListItem />
        <PropertyListItem />
        <PropertyListItem />
    </div>
  )
}
