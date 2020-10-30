import { ReactNode } from 'react'
import Link from 'next/link'

type Props = {
  href: string
  children: ReactNode
  className?: string
}

const isRelativeLink = (link: string) => !link.indexOf('/')

export const LinkOrPlainAnchor = ({ href, children, className }: Props) =>
  isRelativeLink(href) ? (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  ) : (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
