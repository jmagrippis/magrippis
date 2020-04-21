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

  export const frontMatter: {
    title: string
    snippet: string
    timestamp: number
    tags: string[]
    __resourcePath: string
  }

  const component: ReactNode
  export default ReactNode
}
