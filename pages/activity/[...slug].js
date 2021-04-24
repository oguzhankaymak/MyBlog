import React from 'react'
import { getMdxNode, getMdxPaths } from 'next-mdx/server'
import { useHydrate } from 'next-mdx/client'
import { mdxComponents } from '../../components/mdxComponents/mdx-componets'

export default function ActivityPage({ activity }) {
  const content = useHydrate(activity, {
    components: mdxComponents
  })
  return (
    <div className="site-container">
      <article>
        <h1 className="text-4xl font-bold">{activity.frontMatter.title}</h1>
        <div className="prose-xl mt-4">{content}</div>
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
