declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.svg' {
  import { FunctionComponent, SVGAttributes } from 'react'

  const content: FunctionComponent<
    SVGAttributes<SVGElement> | { title: string }
  >
  export default content
}

declare module '*.mdx' {
  import { ReactNode } from 'react'

  export type FrontMatter = {
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
