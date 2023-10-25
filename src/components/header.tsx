'use server'

import Link from 'next/link'

import ThemeToggle from '@/components/theme-toggle'
import { APP_NAME } from '@/config'

export async function NavLink({
  href,
  children
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </Link>
  )
}

export async function Header() {
  return (
    <header className="py-6 px-10">
      <nav className="relative z-50 flex justify-between">
        <div className="flex items-center justify-between md:gap-x-12 w-full">
          <Link className="font-bold text-2xl" href="#" aria-label="Home">
            {APP_NAME}
          </Link>
          <div className="hidden md:flex space-x-4 items-center">
            <ThemeToggle />
            <Link className="font-bold" href="/login">
              Sign in
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
