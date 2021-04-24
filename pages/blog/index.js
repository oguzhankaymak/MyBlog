import Link from 'next/link'
import { getAllNodes } from 'next-mdx/server'

function BlogPage({ posts }) {
  return (
    <div className="site-container h-screen">
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.url} className="p-5 hover:bg-gray-200">
            <h2 className="text-2xl font-bold hover:text-secondary">
              <Link href={post.url}>
                <a>{post.frontMatter.title}</a>
              </Link>
            </h2>
            <p className="mt-1 text-lg">{post.frontMatter.excerpt}</p>
            <div className="text-gray-400">
              <span>{post.frontMatter.showDate}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllNodes('post')
    }
  }
}

export default BlogPage
