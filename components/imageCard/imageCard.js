import React from 'react'

export default function ImageCard({ image, text }) {
  return (
    <div className="flex items-center flex-col border border-gray-400 dark:border-gray-600 rounded-2xl m-4">
      <img
        className="object-cover h-80 w-full rounded-xl"
        src={image}
        alt="image"
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-semibold">“{text}”</p>
        </blockquote>
        <button className="font-medium">
          <div className="text-gray-500 hover:underline">Daha Fazlası...</div>
        </button>
      </div>
    </div>
  )
}
