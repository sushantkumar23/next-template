'use server'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { format, parseISO } from 'date-fns'

import { allPosts } from 'contentlayer/generated'
import { BASE_URL, baseOpenGraphMetadata, baseTwitterMetadata } from '@/config'

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

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

export default async function BlogLayout({
  params
}: {
  params: { slug: string }
}) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) notFound()

  return (
    <article className="mx-auto max-w-2xl py-16">
      <div className="my-8 text-left">
        <h1 className="mb-4 text-4xl font-bold leading-snug">{post.title}</h1>
        <time
          dateTime={post.date}
          className="text-md mb-1 text-gray-600 dark:text-gray-400"
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
