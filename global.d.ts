import type { FunctionComponent, SVGAttributes } from 'react'
import type { ReactNode } from 'react'

declare global {
  declare module '*.svg' {
    const content: FunctionComponent<
      SVGAttributes<SVGElement> | { title: string }
    >
    export default content
  }

  declare module '*.mdx' {
    export type FrontMatter = {
      title: string
      snippet: string
      publishedAt: Date
      tags: string[]
    }

    export type ParsedFrontMatter = {
      title: string
      snippet: string
      publishedAt: string
      tags: string[]
      __resourcePath: string
    }

    export const frontMatter: FrontMatter

    const component: ReactNode
    export default ReactNode
  }
}
