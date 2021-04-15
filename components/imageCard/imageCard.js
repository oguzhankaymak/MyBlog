import React from 'react'
import styles from './imageCard.module.css'

export default function ImageCard({ image, text }) {
  return (
    <div class={styles.imageCard}>
      <img src={image} alt="image" />
      <div class={styles.container}>
        <blockquote>
          <p class={styles.description}>“{text}”</p>
        </blockquote>
        <button class="font-medium">
          <div class="text-gray-500 hover:underline">Daha Fazlası...</div>
        </button>
      </div>
    </div>
  )
}
