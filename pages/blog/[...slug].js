import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getMdxNode, getMdxPaths } from 'next-mdx/server'
import Form from '../../components/form/form'
import Comments from '../../components/comments/comments'

export default function PostPage({ post }) {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user,
    getAccessTokenSilently
  } = useAuth0()

  const [text, setText] = useState('')
  const [url, setUrl] = useState(null)
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetchComment()
  }, [url])

  useEffect(() => {
    const url = window.location.origin + window.location.pathname
    setUrl(url)
  }, [])

  const fetchComment = async () => {
    if (url) {
      const query = new URLSearchParams({ url })
      const newUrl = `/api/comment?${query.toString()}`
      const response = await fetch(newUrl, {
        method: 'GET'
      })

      const data = await response.json()
      setComments(data)
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const userToken = await getAccessTokenSilently()

    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({ text, userToken, url }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    fetchComment()
    setText('')
  }

  return (
    <div className="site-container h-screen">
      <article>
        <h1 className="text-4xl font-bold">{post.frontMatter.title}</h1>
        <div className="prose mt-4 text-gray-600 antialiase dark:text-gray-400">
          {post.content}
        </div>
      </article>

      <Form onSubmit={onSubmit} text={text} setText={setText} />
      <Comments comments={comments} />
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
