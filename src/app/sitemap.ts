'use server'

import { MetadataRoute } from 'next'

// Remove this line if you want to add blog posts to your sitemap
import { allPosts, Post } from 'contentlayer/generated'
import { BASE_URL } from '@/config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ['', '/privacy', '/terms', '/blog'].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }))

  // Remove this part: if you don't want to add blog posts to your sitemap
  const blogs = allPosts.map((post: Post) => ({
    url: `${BASE_URL}${post.url}`,
    lastModified: new Date(post.date).toISOString().split('T')[0]
  }))

  return [...routes, ...blogs]
}
