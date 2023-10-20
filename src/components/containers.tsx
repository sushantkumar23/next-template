import { ReactNode } from 'react'

import { APP_NAME } from '@/config'

type ContainerProps = {
  children: ReactNode
} & React.HTMLProps<HTMLDivElement>

export function Container(props: ContainerProps) {
  return (
    <div className="mx-auto max-w-3xl px-4" {...props}>
      {props.children}
    </div>
  )
}

function PrivacyTermsHeadingPanel({ heading }: { heading: string }) {
  return (
    <div className="mx-auto mb-12 text-lg">
      <h1>
        <span className="block text-center text-base font-semibold uppercase tracking-wide">
          {APP_NAME}
        </span>
        <span className="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl">
          {heading}
        </span>
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
    <Container>
      <div className="prose relative mx-auto max-w-prose px-4 py-24 dark:prose-invert sm:px-6 lg:px-8">
        <PrivacyTermsHeadingPanel heading={heading} />
        <div className="space-y-6 text-lg leading-8">{children}</div>
      </div>
    </Container>
  )
}
