import Link from 'next/link'

import { APP_NAME, COMPANY_NAME, COMPANY_URL } from '@/config'

function Footer() {
  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="xl:col-span-1 items-center md:items-start flex flex-col">
            <Link
              href={'/'}
              className="flex items-center mb-2 font-medium title-font"
            >
              <span className="text-2xl font-bold">{APP_NAME}</span>
            </Link>
            <p className="mb-8 text-base text-gray-500">
              Example app for building faster
            </p>
          </div>
        </div>
        <div className="pt-4 mt-12 border-t border-gray-200 dark:border-gray-800">
          <Link target="_blank" href={COMPANY_URL}>
            <p className="text-sm text-gray-400 xl:text-center">
              &copy; 2023 {COMPANY_NAME}. All rights reserved.
            </p>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
