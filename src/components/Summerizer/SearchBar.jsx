import React, { Component } from 'react'

export default function SearchBar() {
  return (
    <div className="flex items-center rounded-xl gap-6 w-full h-9">
      <input
        className="text-lg text-gray-600 border-2 border-gray-400 rounded-2xl py-2 px-4 w-80 h-11
                   focus:outline-none focus:ring focus:border-indigo-600 placeholder-gray-300"
        placeholder="Search"
      />
      {/* <Button classes="w-24 h-8 text-lg rounded-full" text="Add" /> */}
      <button
        className="transition-colors duration-100 transform text-xl font-medium w-24 h-10
                 bg-indigo-600 rounded-md hover:bg-indigo-500 text-white"
      >
        GO
      </button>
    </div>
  )
}
