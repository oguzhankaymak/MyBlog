import React, { useState } from 'react'
import { getMdxNode, getMdxPaths } from 'next-mdx/server'
import { useHydrate } from 'next-mdx/client'
import { mdxComponents } from '../../components/mdxComponents/mdx-componets'
import Form from '../../components/form/form'
import Comments from '../../components/comments/comments'
import UseComment from '../../hooks/useComment'

export default function PostPage({ post }) {
  const [comments, loadingComments, onSubmit, text, setText] = UseComment()

  const content = useHydrate(post, {
    components: mdxComponents
  })

  return (
    <div className="site-container h-screen">
      <article>
        <h1 className="text-4xl font-bold">{post.frontMatter.title}</h1>
        <div className="prose mt-4 text-gray-600 antialiase dark:text-gray-400">
          {content}
        </div>
      </article>

      <Form onSubmit={onSubmit} text={text} setText={setText} />
      <Comments comments={comments} loading={loadingComments} />
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
