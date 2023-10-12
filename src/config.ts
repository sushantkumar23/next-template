export const APP_NAME = 'Example App'

export const BASE_URL = process.env.BASE_URL || 'https://localhost:3000'

// Metadata for SEO: title, description, OG and Twitter cards
export const title = `${APP_NAME} - Subtile of the example app`
export const description =
  'This is an example app to show how to use Next.js with TypeScript and Tailwind CSS.'

export const baseOpenGraphMetadata = {
  title,
  description,
  type: 'website',
  url: BASE_URL,
  siteName: APP_NAME,
  images: ['/opengraph-image.png']
}

export const TWITTER_HANDLE = '@example_app'
export const baseTwitterMetadata = {
  card: 'summary_large_image',
  images: ['/twitter-image.png'],
  title,
  description,
  site: TWITTER_HANDLE,
  creator: TWITTER_HANDLE
}

// Blog related configuration
export const BLOG_NAME = "Example App's Blog"
