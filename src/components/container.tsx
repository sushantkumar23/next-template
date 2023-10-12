import { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
} & React.HTMLProps<HTMLDivElement>

export default function Container(props: ContainerProps) {
  return (
    <div className="mx-auto max-w-3xl px-4" {...props}>
      {props.children}
    </div>
  )
}
