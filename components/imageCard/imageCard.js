import Link from 'next/link'
import React from 'react'

export default function ImageCard({ address, image, title, text, date }) {
  return (
    <div className="flex flex-col border border-gray-400 rounded-2xl m-4">
      <img
        className="object-cover h-80 w-full rounded-xl"
        src={image}
        alt="image"
      />
      <div className="px-4 py-6">
        <Link href={address}>
          <a className="text-xl font-bold hover:underline">{title}</a>
        </Link>
        <div className="pt-2 text-gray-400">
          <span>{date}</span>
        </div>
        <div className="pt-4 space-y-4">
          <blockquote>
            <p className="text-lg font-semibold">“{text}”</p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
