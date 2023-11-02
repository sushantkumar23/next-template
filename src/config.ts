// Configuration: App
export const APP_NAME = 'Example App'
export const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

// Configuration: Company
export const COMPANY_NAME = 'Example Company'
export const COMPANY_URL = 'https://www.example.com'
export const COMPANY_ADDRESS_LINE_1 = '123 Example Street'
export const COMPANY_ADDRESS_LINE_2 = 'Example City, EX 12345'
export const COMPANY_EMAIL = 'contact@example.com'
export const PRODUCTS = [
  { name: 'Product #1', href: 'https://example.com' },
  { name: 'Product #2', href: 'https://example.com' },
  { name: 'Product #3', href: 'https://example.com' },
  { name: 'Product #4', href: 'https://example.com' }
]

// Configuration: Metadata
// for SEO: title, description
export const title = `${APP_NAME} - Subtile of the example app`
export const description =
  'Nextjs boilerplate app to show how to build fast, modern and accessible websites'

// Configuration: Metadata - OpenGraph
export const baseOpenGraphMetadata = {
  title,
  description,
  type: 'website',
  url: BASE_URL,
  siteName: APP_NAME,
  images: ['/image.png']
}

// Configuration: Metadata - Twitter
export const TWITTER_HANDLE = '@example_app'
export const baseTwitterMetadata = {
  card: 'summary_large_image',
  images: ['/image.png'],
  title,
  description,
  site: TWITTER_HANDLE,
  creator: TWITTER_HANDLE
}

// Configuration: Blog
// Remove these lines when no blog is needed
export const BLOG_NAME = "Example App's Blog"
export const BLOG_DESCRIPTION =
  'Read about the latest developments on example app'
