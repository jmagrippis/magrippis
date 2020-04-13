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
