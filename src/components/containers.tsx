import { ReactNode } from 'react'

import { APP_NAME } from '@/config'
import { cn } from '@/utils'

type ContainerProps = {
  children: ReactNode
} & React.HTMLProps<HTMLDivElement>

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn('mx-auto max-w-3xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {props.children}
    </div>
  )
}

function PrivacyTermsHeadingPanel({ heading }: { heading: string }) {
  return (
    <div className="mb-12">
      <p className="block text-center text-base font-semibold uppercase tracking-wide">
        {APP_NAME}
      </p>
      <h1 className="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl">
        {heading}
      </h1>
    </div>
  )
}

type PrivacyTermsContainerProps = {
  heading: string
  children: ReactNode
} & React.HTMLProps<HTMLDivElement>

export function PrivacyTermsContainer({
  heading,
  children,
  ...props
}: PrivacyTermsContainerProps) {
  return (
    <Container className="max-w-prose py-24">
      <PrivacyTermsHeadingPanel heading={heading} />
      <div className="prose dark:prose-invert lg:prose-lg">{children}</div>
    </Container>
  )
}
