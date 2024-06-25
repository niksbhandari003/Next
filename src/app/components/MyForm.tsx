"use client"
import Image from 'next/image'
import React from 'react'

const MyForm = () => {

const imageLoader = ({ src, width, quality }:any) => {
  return `https://www.shutterstock.com/image-illustration/${src}?w=${width}&q=${quality || 75}`
}


  return (
    <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 flex justify-center h-screen items-center">
      <div className="mb-4">

<Image 
 loader={imageLoader}
 src="/network-growth-business-concept-group-260nw-142142563.jpg"
      width={200}
      height={200}
      alt="Picture of the author"/>

      </div>
    <form method="post" action="">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Full Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="FullName"
          type="text"
          placeholder="FullName"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Contact
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="Contact"
          type="text"
          placeholder="Contact"
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Sign Up
        </button>
      </div>
    </form>
  </div>
  )
}

export default MyForm
