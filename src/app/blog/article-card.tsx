'use server'

import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { Post } from 'contentlayer/generated'

type ArticleCardProps = {
  post: Post
}

export default async function ArticleCard({ post }: ArticleCardProps) {
  return (
    <article className="py-8">
      <div className="group relative max-w-2xl">
        <time
          dateTime={post.date}
          className="block text-sm leading-6 text-gray-600 dark:text-gray-400"
        >
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h2 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600 dark:text-gray-100 dark:group-hover:text-gray-400">
          <Link href={post.url}>
            <span className="absolute inset-0" />
            {post.title}
          </Link>
        </h2>
        <div
          className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
        <div className="mt-4 flex">
          <Link
            href={post.url}
            className="text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400"
            aria-describedby={post.title}
          >
            Continue reading <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
