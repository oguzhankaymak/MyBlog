import React from 'react'
import { getMdxNode, getMdxPaths } from 'next-mdx/server'

export default function ActivityPage({ activity }) {
  return (
    <div className="site-container h-screen">
      <article>
        <div className="prose mt-4 text-gray-600 antialiase dark:text-gray-400">
          {activity.content}
        </div>
      </article>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths('activity'),
    fallback: false
  }
}

export async function getStaticProps(context) {
  const activity = await getMdxNode('activity', context)

  if (!activity) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      activity
    }
  }
}
