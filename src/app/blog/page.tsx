'use server'

import { compareDesc } from 'date-fns'
import { Container } from '@/components/containers'
import { allPosts, Post } from 'contentlayer/generated'
import ArticleCard from '@/app/blog/article-card'
import {
  APP_NAME,
  BASE_URL,
  BLOG_NAME,
  baseTwitterMetadata,
  baseOpenGraphMetadata
} from '@/config'

// Metadata for BlogPage: title, description
const title = `${BLOG_NAME} | ${APP_NAME}`
const description = 'Read about the latest developments on example app'

export async function generateMetadata() {
  return {
    title,
    description,
    openGraph: {
      ...baseOpenGraphMetadata,
      title,
      description,
      url: `${BASE_URL}/blog`
    },
    twitter: {
      ...baseTwitterMetadata,
      title,
      description
    }
  }
}

export default async function BlogIndex() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )
  return (
    <Container>
      <div className="py-32">
        <h3 className="text-md font-bold text-indigo-500">Blog</h3>
        <h1 className="mt-4 text-4xl font-extrabold text-black dark:text-white">
          {BLOG_NAME}
        </h1>
        <div className="mt-6">
          {posts.map((post: Post, index) => (
            <ArticleCard key={index} post={post} />
          ))}
        </div>
      </div>
    </Container>
  )
}
