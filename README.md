# Example NextJS 13 App

Built with Next 13 App Router, TailwindCSS, and Contentlayer (for Blog)

## Blog: Adding Blog/contentlayer integration to NextJS
Install the packages 
```
yarn add next-contentlayer contentlayer date-fns schema-dts
```

Then wrap your next configuration object in (next.config.js) in the withContentlayer utility.
```
// next.config.js
const { withContentlayer } = require("next-contentlayer")
module.exports = withContentlayer(nextConfig)
```

Create a `contentlayer.config.ts` file on the root directory with following content
```
// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: true }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: post => `/blog/${post._raw.flattenedPath}`
    }
  }
}))

export default makeSource({ contentDirPath: 'blog', documentTypes: [Post] })
```

Then add the following lines to `tsconfig.json`
```
paths: [
  ...,
  "contentlayer/generated": ["./.contentlayer/generated"]
],
include: [
  ...,
  ".contentlayer/generated"
] 
```


## Blog: Removing Blog/contentlayer integration

- Remove the packages first
  `yarn remove contentlayer next-contentlayer`

- Remove the files and folders of blog

  - rm -rf blog contentlayer.config.ts app/blog

- Remove the blog configuration section from the config.ts file
- Remove the blog URLS from the sitemap.ts

Optional:

- Remove @tailwindcss/typography package from the project
  - yarn remove @tailwindcss/typography
  - Remove the typography plugin from tailwind.config.js

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
