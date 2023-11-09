'use server'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { format, parseISO } from 'date-fns'
import { BlogPosting, WithContext } from 'schema-dts'

import type { Post } from 'contentlayer/generated'
import { allPosts } from 'contentlayer/generated'
import {
  BASE_URL,
  COMPANY_NAME,
  COMPANY_URL,
  baseOpenGraphMetadata,
  baseTwitterMetadata
} from '@/config'

const generateBlogPostingStructuredData = (post: Post) => {
  const schema: WithContext<BlogPosting> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    author: [
      {
        '@type': 'Organization',
        name: COMPANY_NAME,
        url: COMPANY_URL
      }
    ],
    image: `${BASE_URL}/opengraph-image.png`,
    datePublished: format(parseISO(post.date), 'yyyy-MM-dd')
  }
  return schema
}

type DataProps = {
  data: WithContext<BlogPosting>
}

const StructuredData: React.FC<DataProps> = ({ data }) => {
  return (
    <script
      key="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export async function generateMetadata({
  params
}: {
  params: { slug: string }
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) return
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      ...baseOpenGraphMetadata,
      title: post.title,
      description: post.description,
      url: `${BASE_URL}${post.url}`
    },
    twitter: {
      ...baseTwitterMetadata,
      title: post.title,
      description: post.description
    }
  }
}

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export default async function BlogDetailsPage({
  params
}: {
  params: { slug: string }
}) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) notFound()

  return (
    <article className="mx-auto max-w-2xl py-16">
      <StructuredData data={generateBlogPostingStructuredData(post)} />
      <div className="my-8 text-left">
        <h1 className="mb-4 text-4xl font-bold leading-snug">{post.title}</h1>
        <time
          dateTime={post.date}
          className="mb-1 text-gray-600 dark:text-gray-400"
        >
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
      <div
        className="prose prose-lg mt-16 dark:prose-invert [&>*:last-child]:mb-0 [&>*]:mb-3"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  )
}
