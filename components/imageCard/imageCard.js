import React from 'react'
import styles from './imageCard.module.css'

export default function ImageCard({ image, text }) {
  return (
    <div className={styles.imageCard}>
      <img className="object-cover h-80 w-full" src={image} alt="image" />
      <div className={styles.container}>
        <blockquote>
          <p className={styles.description}>“{text}”</p>
        </blockquote>
        <button className="font-medium">
          <div className="text-gray-500 hover:underline">Daha Fazlası...</div>
        </button>
      </div>
    </div>
  )
}
