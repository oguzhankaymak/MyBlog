import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getMdxNode, getMdxPaths } from 'next-mdx/server'

export default function PostPage({ post }) {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0()

  return (
    <div className="site-container h-screen">
      <article>
        <h1 className="text-4xl font-bold">{post.frontMatter.title}</h1>
        <div className="prose mt-4 text-gray-600 antialiase dark:text-gray-400">
          {post.content}
        </div>
      </article>

      <form className="mt-10">
        <textarea
          rows="3"
          className="textarea"
          placeholder="Görüşlerini bizimle paylaş..."
        />
        <div className="mt-4">
          {isAuthenticated ? (
            <div className="flex items-center space-x-2">
              <button className="bg-blue-600 text-white px-2 py-1 rounded">
                Send
              </button>
              <img src={user.picture} width={20} className="rounded-full" />
              <span>{user.name}</span>
              <button
                typeof="button"
                onClick={() =>
                  logout({ returnTo: process.env.NEXT_PUBLIC_URL + '/blog' })
                }
              >
                X
              </button>
            </div>
          ) : (
            <button
              className="button"
              typeof="button"
              onClick={() => loginWithRedirect()}
            >
              Giriş Yap
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths('post'),
    fallback: false
  }
}

export async function getStaticProps(context) {
  const post = await getMdxNode('post', context)

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post
    }
  }
}
