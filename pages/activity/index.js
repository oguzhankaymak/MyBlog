import Link from 'next/link'
import { getAllNodes } from 'next-mdx/server'

import ImageCard from '../../components/imageCard/imageCard'

function ActivityPage({ activities }) {
  return (
    <div className="flex max-w-5xl mx-auto">
      <div className="grid border border-transparent md:grid-cols-2 sm:grid-cols-1">
        {activities.map((activity, index) => (
          <ImageCard
            title={activity.frontMatter.title}
            text={activity.frontMatter.excerpt}
            image={activity.frontMatter.image}
            date={activity.frontMatter.showDate}
            key={activity.url}
            address={activity.frontMatter.address}
          />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      activities: await getAllNodes('activity')
    }
  }
}

export default ActivityPage
